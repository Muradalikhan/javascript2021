import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';




function InputField(props) {
    const [currency, setCurrency] = useState('blank');
    const [data, setData] = useState([]);

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    
    useEffect(()=>{
       
        // console.log(props)

    },[])

    return (
        <div className='m-3'>
            <TextField
                id="outlined-select-currency-native"
                select
                label="Select by State"
                value={currency}
                onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
                helperText="select by choosing state"
            >
                {data.map((option,index) => (
                    <option key={index} value={option.state}>
                        {option.state}
                    </option>
                ))}
            </TextField>
           
        </div>
    )
}

export default InputField