import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from '../config/firebase/firebase.js'

function Home(){

    let [userLogin, setUserLogin] = useState(false)
    let navigate = useNavigate('')


    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                console.log('user is Sign in',uid)
                setUserLogin(user.email)
                console.log(user)
            } else {
               console.log('user is sign out ')
               navigate('/login')
            }
        });

    }, [])
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home