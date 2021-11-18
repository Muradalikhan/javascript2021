

import { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs,addDoc,updateDoc,doc,deleteDoc } from 'firebase/firestore'
import { Button } from '@mui/material'
import { deleteUser } from '@firebase/auth'

function Crud() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [user, setUser] = useState([])

    let userCollectionRef = collection(db,'user')

    useEffect(() => {
        const getUsers =async () => {
            const data =await getDocs(userCollectionRef)
            // console.log(data)
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers();
    }, [])

    let addData =async () => {
        await addDoc(userCollectionRef,{name:name,email:email})
    }

    let updateUser=async (id,age)=>{
        const userDoc=doc(db,'user',id)
        const updatedField={age:age+1}
        await updateDoc(userDoc,updatedField)
    }

    let deleteUser=(id)=>{
        const userDoc=doc(db,'user',id)
        deleteDoc(userDoc)
    }


    return (
        <>
            <h1>  Crud operation</h1>
            <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
            <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
            <button onClick={addData}>Add</button>

            {user.map((user,index) => {
                return (
                    <div key={index}>
                        <h1>{user.name}</h1>
                        <h1>{user.email}</h1>
                        <h1>{user.age}</h1>
                        <button  onClick={()=>{updateUser(user.id,user.age)}}>Update</button>
                        <button  onClick={()=>deleteUser(user.id)}>Delete</button>
                    </div>
                )
            })}
        </>
    )
}

export default Crud