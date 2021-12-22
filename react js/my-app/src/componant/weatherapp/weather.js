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
        <div className='weatherApp'>
            <h1>WeatherApp</h1>
            <input placeholder='search...' onChange={(e) => setSearch(e.target.value)}></input>
            {!city ? (
                <h2>no data found</h2>
            ) :
                (
                    <div>
                        <h2>City</h2>
                        {search}
                        <h1>{city.temp} oC</h1>
                        <p>{city.temp_min} oc || {city.temp_max} oc</p>
                    </div>
                )

            }


        </div>
    )
}

export default WeatherApp