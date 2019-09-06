import React from 'react'
import NavBar from './NavBar'

const About = props =>{
    return(
        <div className = 'page'>
            <NavBar path = {props.location.pathname}/>
        </div>
    )
}

export default About