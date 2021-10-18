import { useState } from 'react';

function Todo() {

    const [inpValue, setInpValue] = useState('')
    const [item, setItem] = useState([])
    const [editItem, setEditItem] = useState(null)
    // console.log(inpValue)



    const addItem = () => {
        if (!inpValue) {
            alert('plzz fill data');
        } else {
            const obj = {
                id: new Date().getTime().toString(),
                name: inpValue
            }
            setItem([...item, obj]);
            setInpValue('')
        }
    }



    let deleteItem = () => {
        console.log('delete function ')
    }

    let updateItem = (id) => {
        let findElement = item.find((ele) => {
            return ele.id === id
        })
        console.log(findElement)

        setInpValue(findElement.name)
    
        
    }


    console.log(item)

    return (
        <div> App body
            <br />
            <input onChange={(e) => setInpValue(e.target.value)}  placeholder='Enter value'></input>
            <button onClick={addItem}>Add</button>

            <ul>{
                item.map((e) => {
                    return (
                        
                            <li key={e.id}>
                                {e.name}
                                <button onClick={() => setInpValue(updateItem(e.id))}>Update</button>
                                <button onClick={() => setInpValue(deleteItem)}>Delete</button>
                            </li>


                        
                    )
                })

            }</ul>
        </div>
    );
}

export default Todo;