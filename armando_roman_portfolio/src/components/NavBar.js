import React from 'react'

const NavBar = () => {

    return (

        <div className = 'nav-bar'>
            <div className = 'logo-container'>
                <h2 className = 'first-name'>A</h2>
                <h2 className = 'last-name'>R</h2>
            </div>
            <ul className = 'nav-links'>
                {/*<li className = 'nav-item' onClick = {() => console.log('hello')}>Home</li>*/}
                <li className = 'nav-item' onClick = {() => console.log('hello')}>About</li>
                <li className = 'nav-item' onClick = {() => console.log('hello')}>Projects</li>
                <li className = 'nav-item' onClick = {() => console.log('hello')}>Contact</li>
            </ul>
        </div>
    )


}

export default NavBar