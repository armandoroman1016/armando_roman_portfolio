import React from 'react'
import NavBar from './NavBar'
import github from '../assests/images/github.png'
import gmail from '../assests/images/gmail.png'
import linkedin from '../assests/images/linkedin.png'


const Contact = props => {

    return(
        <div className = 'contact-container page'>
            <NavBar path = {props.location.pathname}/>
            <div className = 'circle-one'/>
            <div className = 'circle-two'/>
            <div className = 'circle-three'/>
            <div className = 'circle-four'/>
            <div className = 'form-container'>
                <h2>Contact Armando</h2>
                <form id = 'contact_form'>
                    <div className = 'input-container'>
                        <input type = 'text' name = 'name' required/>
                            <label>Name</label>
                    </div>
                    <div className = 'input-container'>
                        <input type = 'text' name = 'phone' required/>
                            <label>Phone Number</label>
                    </div>
                    <div className = 'input-container'>
                        <input type = 'text' name = 'email' required/>
                            <label>Email</label>
                    </div>
                    <div className = 'input-container'>
                        <input type = 'text' name = 'message' required/>
                            <label>Message</label>
                    </div>
                    <button type = 'submit'>Submit</button>
                    <div className = 'contact-icons'>
                        <img src = {github} alt = 'github-icon' />
                        <img src = {gmail} alt = 'gmail-icon' />
                        <img src = {linkedin} alt = 'linkedin-icon' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact