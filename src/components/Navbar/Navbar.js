import React, { useState } from 'react'
import { SiCilium } from 'react-icons/si'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaRegTimesCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navbar = () => {
    const navigate = useNavigate()
    const [click, setClick] = useState(false)
    const [home, setHome] = useState(false)
    const [search, setSearch] = useState(false)
    const [about, setAbout] = useState(false)
    const [contact, setContact] = useState(false)
    const [marketing, setMarketing] = useState(false)
    const [details, setDetails] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const GetScreen = (e) => {
        if (e == "Home") {

            navigate('/')
        } else if (e == "about") {

            navigate('/')

        } else if (e == "contact") {

            navigate('/contact')

        }
        else if (e == "Details") {

            navigate('/')

        } else if (e == "Sign_in") {

            navigate('/signin')

        } else if (e == "Marketing") {

            navigate('/')

        } else if (e == "Ringtone") {

            navigate('/')

        }
    }
    return (
        <>
            <div className='navbar'>
                <h1>
                    <SiCilium style={{ color: "white" }} />
                    <span style={{ color: 'red' }}>
                        &nbsp;  WHAT
                    </span>
                    <span style={{ color: 'green' }}> TO TRADE</span>

                </h1>
                <div style={{ margin: "auto", marginTop: "-8px" }}>
                    <ul className={click ? "nav-menu active" : 'nav-menu'}>
                        <li>
                            <a onClick={() => GetScreen("Home")}  >Home
                            </a>
                        </li>
                        <li>
                            <a onClick={() => GetScreen("about")} >About
                            </a>
                        </li>
                        <li>
                            <a onClick={() => GetScreen("Marketing")} >Marketing
                            </a>
                        </li>
                        <li>
                            <a onClick={() => GetScreen("contact")} >Contact
                            </a>
                        </li>
                        <li>
                            <a type='button' onClick={() => GetScreen("Sign_in")} >Sign In</a>

                        </li>

                    </ul>

                </div>


                <div className='hamburger' onClick={handleClick} style={{ color: "black" }}>
                    {click ? (<FaRegTimesCircle className='icon' style={{ color: 'black' }} />) : (<HiOutlineMenuAlt4 className='icon' style={{ color: 'black' }} />)}
                </div>
            </div>
        </>
    )
}

export default Navbar