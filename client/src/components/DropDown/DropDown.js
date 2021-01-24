import React, {useState} from 'react'
import {MenuItems} from '../MenuItems/MenuItems'
import {Link} from 'react-router-dom'
import './DropDown.css'

function DropDown() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return(
        <>
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item,index) => {
                return (
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(flase)}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default DropDown