import { KeyboardArrowDown, Send } from '@mui/icons-material'
import { Input, Paper, Button } from '@mui/material'
import { db, getAuth, onAuthStateChanged } from '../config/firebase/firebase.js'
import React, { useState, useEffect, useRef } from 'react'
import Navbar_1 from '../componant/navbar/navbar1'
import { collection, getDocs, addDoc, doc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore'
import '../componant/style/chat.css'
import { useNavigate } from 'react-router-dom'




export default function Chat() {
    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState([])
    const [spinner, setSpinner] = useState(false)
    const [isOpened, setIsOpened] = useState(false);

    const navigate = useNavigate()
    const auth = getAuth();
    const scroll = useRef()
    let collectionRef = collection(db, 'messages')
    let q = query(collectionRef, orderBy('createdAt', 'asc'))


    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSpinner(true)
                const getMessages = async () => {
                    const data = await getDocs(q)
                    setMessages(data.docs.map((doc, index) => ({ ...doc.data(), id: doc.id, key: index })))
                    setSpinner(false)
                }

                getMessages();
            }
            else {
                console.log('plz login first')
                navigate('/login')
            }
        })



    }, [messages])



    const sendMsg = async () => {
        const { uid } = auth.currentUser
        await addDoc(collectionRef, {
            text: msg,
            uid,
            photoURL: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png',
            createdAt: serverTimestamp()
        })
        setMsg('')
        console.log(msg)
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }


    const deletemsg = (id) => {
        const userMsg = doc(db, 'messages', id)
        deleteDoc(userMsg);
    }


    const toggle = () => {
        setIsOpened(!isOpened)
    }







    return (
        <div>
            <Navbar_1 />
            <Paper elevation={12} sx={{ margin: '100px auto' }} className={`chatScreen`}>
                <h1>Chat app</h1>

                {!spinner ?  <div className="lds-ellipsis centerOfpage"><div></div><div></div><div></div><div></div></div>
                    :

                    <div className=' msgs'>

                        {messages.map(({ id, text, photoURL, uid }) => (
                            <div>

                                <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`} >
                                    <span className={`${uid === auth.currentUser.uid ? 'closeBtnSender' : 'closeBtnReciever'}`} onClick={toggle}><KeyboardArrowDown /> </span>
                                    {isOpened && <button className={`${uid === auth.currentUser.uid ? 'deleteBtnSender' : 'deleteBtnReciever'}`} onClick={() => deletemsg(id)}>Delete</button>}
                                    <img src={photoURL} alt="img" className='chatimg' />
                                    <p> {text} </p>
                                </div>
                            </div>
                        ))}
                    </div>

                }
                <div ref={scroll}></div>

                <div style={{ position: 'sticky', bottom: '2px', padding: '2px', backgroundColor: 'white' }}>
                    <Input placeholder='Write message' sx={{ width: '70%' }} value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button variant='contained' onClick={sendMsg}><Send /> Send</Button>
                </div>
            </Paper>

        </div>
    )
}
