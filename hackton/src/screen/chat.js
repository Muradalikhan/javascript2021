import { KeyboardArrowDown, Send } from '@mui/icons-material'
import { Input, Paper, Button } from '@mui/material'
import { db, FirebaseConnection, getAuth } from '../config/firebase/firebase.js'
import React, { useState, useEffect, useRef } from 'react'
import Navbar_1 from '../componant/navbar/navbar1'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore'
import '../componant/style/chat.css'



export default function Chat() {
    const scroll = useRef()
    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState([])
    const [spinner, setSpinner] = useState(false)
    const [isOpened, setIsOpened] = useState(false);

    let collectionRef = collection(db, 'messages')
    let q = query(collectionRef, orderBy('createdAt', 'asc'))

    useEffect(() => {
        setSpinner(true)
        const getMessages = async () => {
            const data = await getDocs(q)
            setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            setSpinner(false)

        }

        getMessages();

    }, [messages])


    const auth = getAuth()
    const sendMsg = async (e) => {
        // e.preventDefault()
        const { uid } = auth.currentUser
        await addDoc(collectionRef, {
            text: msg,
            uid,
            photoURL: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png',
            createdAt: serverTimestamp()
        })
        setMsg(' ')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }



    const deletemsg=(id)=>{
        const userMsg=doc(db,'messages',id)
        deleteDoc(userMsg);
    }


    const toggle=()=>{
        setIsOpened(!isOpened)
    }







    return (
        <div>
            <Navbar_1 />
            <Paper elevation={12} sx={{ margin: '100px auto', width: '50%' }}>
                <h1>Chat app</h1>

                {!spinner ? <p>Data is loading...</p>
                    :
                    <div className=' msgs'>

                        {messages.map(({ id, text, photoURL, uid }) => (
                            <div>

                                <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`} >
                                    <span className={`${uid===auth.currentUser.uid?'closeBtnSender':'closeBtnReciever'}`} onClick={toggle}><KeyboardArrowDown/> </span>
                                    {isOpened && <button className={`${uid===auth.currentUser.uid?'deleteBtnSender':'deleteBtnReciever'}`} onClick={()=>deletemsg(id)}>Delete</button>}
                                    <img src={photoURL} alt="img" className='chatimg' />
                                    <p> {text} </p>
                                </div>
                            </div>
                        ))}

                    </div>
                }
                <Input placeholder='Write message' onChange={e => setMsg(e.target.value)} />
                <Button variant='contained' onClick={sendMsg}><Send /> Send</Button>
                <div ref={scroll}></div>
            </Paper>
        </div>
    )
}
