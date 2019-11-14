import React from 'react'

const About = props =>{
    return(
        <section className = 'about-container page'>
            <div className = 'about-text'>
                <h2>Who Is Armando Roman<span> ?</span></h2>
                <div  className = 'copy'>
                    <p>
                        Hi, I'm Armando Roman and I am a Full Stack Web Developer that truly enjoys building products that will benefit many people.
                        I have been programming for the better part of one year now.
                    </p>
                    <p>
                        My favorite part of being a developer is overcoming all the challenges that we constantly face. 
                        That is actually a pretty big reason for me wanting to become a dev in the first place.
                    </p>
                    <p> 
                        When I'm not at the computer. You can find me out with my family, probably enjoying a some fresh BBQ.
                        If you would like to chat about the latest technologies, BBQ, fitness, coffee, or the Raiders contact me.
                    </p>
                </div>
            </div>
            <div className = 'skills'>
                <h3>Skills and Familiar Technologies</h3>
                <ul>
                    <div className = 'li-container'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>ReactJs</li>
                    </div>
                    <div className = 'li-container'>
                        <li>SCSS</li>
                        <li>NodeJs</li>
                        <li>ExpressJs</li>
                        <li>Relational Databases</li>
                    </div>
                </ul>
            </div>
            <span className = 'background-text javascript'>JAVASCRIPT</span>
            <span className = 'background-text css'>CSS</span>
            <span className = 'background-text react'>REACTJS</span>
            <span className = 'background-text node'>NODE</span>
            <span className = 'background-text python'>PYTHON</span>
            <span className = 'background-text html'>HTML</span>
            <span className = 'background-text express'>EXPRESSJS</span>

        </section>
    )
}

export default About