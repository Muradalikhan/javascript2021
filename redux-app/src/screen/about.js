import { Link } from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'

let About = () => {
    const myState = useSelector(state => state)
    const dispatch=useDispatch()


    const updateState=()=>{
        dispatch(
            {
                type:'UPDATEAGE',
                updatedAge:myState.age+1
            }
        )
    }



    return (
        <div style={{margin:'40px 50px'}}>
            <h1>About</h1>
            <h1> {myState.name}</h1>
            <h1> {myState.age}</h1>
            <h1> {myState.city}</h1>
            <button onClick={updateState}>Update age</button>
            <button><Link to='/'>Go to home</Link></button>
        </div>
    )
}

export default About