import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './navBar.css'
function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = ()=> setClick(!click)
    const closeMenu = ()=> setClick(false)

    const showButton = () =>{
        if (window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    window.addEventListener('resize',showButton)
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo-text'>
                        TRVL <i className='fab fa-typo3'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/services' className='nav-links' onClick={closeMenu}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to='/products' className='nav-links' onClick={closeMenu}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMenu}>
                                sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
