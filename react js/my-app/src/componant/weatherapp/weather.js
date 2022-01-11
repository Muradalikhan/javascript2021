import { useState, useEffect } from 'react'
import './comp/css/style.css'



function WeatherApp() {
    let [city, setCity] = useState(null)
    let [search, setSearch] = useState('Karachi')

    useEffect(() => {

        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=70eefff73d1dfcf0e9ca4bfb45c3c9d2`
            const response = await fetch(url)
            const respJson = await response.json()
            setCity(respJson.main);
            console.log(search)

        }

        fetchApi();
    }, [search])





    return (
        <div className='weatherApp '>
            <h1 className='p-3'>WeatherApp</h1>
            {/* <input placeholder='search...' onChange={(e) => setSearch(e.target.value)} ></input> */}
            <select className="mt-2 p-2 " style={{ width: '90%' }} onChange={(e) => setSearch(e.target.value)}>
                <option value="" disabled selected>Choose your country</option>
                <option value="pakistan">pakistan</option>
                <option value="india">india</option>
                <option value="america">america</option>
                <option value="iran">iran</option>
                <option value="Japan">Japan</option>
            </select>

            {!city ? (
                <h2 className='mt-5'>no data found</h2>
            ) :
                (
                    <div>
                        <h2 className='mt-5'>Country</h2>
                        <h3>{search}</h3>
                        <h1>{city.temp} oC</h1>
                        <p>{city.temp_min} oc || {city.temp_max} oc</p>
                    </div>
                )

            }


        </div>
    )
}

export default WeatherApp