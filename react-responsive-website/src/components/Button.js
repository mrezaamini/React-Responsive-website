import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'
const STYLES = ['btn--primary','btn--outline']
const SIZES = ['btn--meduim','btn--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) =>
{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[0]
    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button
            className={`btn ${buttonStyle} ${buttonSize} `}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    )
}