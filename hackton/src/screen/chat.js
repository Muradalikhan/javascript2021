import { Send } from '@mui/icons-material'
import { Input, Paper, Button } from '@mui/material'
import { db, getAuth } from '../config/firebase/firebase.js'
import React, { useState, useEffect } from 'react'
import Navbar_1 from '../componant/navbar/navbar1'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'


export default function Chat() {
    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState([])


    let collectionRef = collection(db, 'messages')

    useEffect(() => {
        const getMessages = async () => {
            const data = await getDocs(collectionRef)
            setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getMessages();
    }, [messages])


    const auth = getAuth()
   
    async function sendMsg(e) {
        // e.preventDefault()
        const { uid } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            uid,
            // createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        // scroll.current.scrollIntoView({ behavior: 'smooth' })
    }














    return (
        <div>
            <Navbar_1 />
            <Paper elevation={12} sx={{ margin: '100px auto', width: '50%' }}>
                <h1>Chat app</h1>
                <div className='chatScree'>

                    {messages.map(({ id, text, photoURL, uid }) => (
                        <div>
                            <div key={id} >
                                <img src={photoURL} alt="img" />
                                <p>{text}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <Input placeholder='Write message' onChange={e => setMsg(e.target.value)}/>
                <Button variant='contained' onClick={sendMsg}><Send /> Send</Button>
            </Paper>
        </div>
    )
}
