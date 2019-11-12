import React from 'react'
import NavBar from './NavBar'

const About = props =>{
    return(
        <section className = 'about-container page'>
            <div className = 'about-text'>
                <h2>Who Is Armando Roman<span> ?</span></h2>
                <p>
                    Armando Roman is a Full Stack Web Developer that truly enjoys building products that will benefit many people.
                    
                </p>
            </div>
            <span className = 'background-text javascript'>JAVASCRIPT</span>
            <span className = 'background-text css'>CSS</span>
            <span className = 'background-text react'>REACTJS</span>
            <span className = 'background-text node'>NODE</span>
            <span className = 'background-text python'>PYTHON</span>
            <span className = 'background-text html'>HTML</span>
        </section>
    )
}

export default About