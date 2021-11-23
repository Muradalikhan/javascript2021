
import {useSelector} from 'react-redux'
function ReduxTest(){

    const state=useSelector((state)=>state)

    return(
        <>
        <h1>{state.map(q=>{
            return(
                <>
                <p>{q.question}</p>
                <ul>
                    <ol>{q.option}</ol>
                </ul>
                </>
            )
        })}</h1>
        </>
    )
}

export default ReduxTest