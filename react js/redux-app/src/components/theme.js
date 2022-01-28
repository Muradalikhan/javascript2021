import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { changeColor } from '../config/reducer/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

function Theme() {

    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch()

    const themeChange = () => {

        setToggle(!toggle)
        if (toggle === true) {
            return (
                dispatch(changeColor('black'))

            )
        }
        if (toggle === false) {
            return (
                dispatch(changeColor('lightgrey'))

            )
        }
    }


    return (
        <>
            <div className='themeBtn'>
                <input type="checkbox" className="checkbox" id="checkbox" />
                <label for="checkbox" className="label" onClick={() => { themeChange() }}>
                    <FontAwesomeIcon icon={faMoon} />
                    <FontAwesomeIcon icon={faSun} />
                    <div className='ball'></div>
                </label>
            </div>

        </>
    )
}

export default Theme;
