import { signOut } from "firebase/auth";
import auth from "./firebase/firebase";
import { useNavigate,useState } from "react-router";
import { Button } from "@mui/material";




function SignOutbtn() {

    let navigate = useNavigate()

    let logout = () => {
        signOut(auth)
        navigate('/login', { replace: true })
    }

    return (
        <>
            <Button variant='contained'
                onClick={logout}
                fullWidth
            >
                Sign out
            </Button>
        </>
    )
}



function FetchBtn() {
    let [data, setData] = useState([])

    let fetchData = () => {
        fetch('https://api.covidtracking.com/v1/states/current.json')
            .then(response => response.json())
            .then(dt => {
                setData(dt)
                console.log(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <Button variant='contained'
                onClick={fetchData}
                fullWidth
            >
                Fetch All Data
            </Button>
        </div>
    )
}

export {FetchBtn,SignOutbtn}