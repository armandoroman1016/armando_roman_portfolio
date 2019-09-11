import React, {useRef, useEffect} from 'react'
import NavBar from './NavBar'
import github from '../assests/images/github.png'
import gmail from '../assests/images/gmail.png'
import linkedin from '../assests/images/linkedin.png'
import {Elastic, TimelineMax, Power4 } from 'gsap';

const Contact = props => {

    let bubbleOne = useRef(null)
    let bubbleTwo = useRef(null)
    let bubbleThree = useRef(null)

    const clearStage = () =>{

        const clearStageTl = new TimelineMax()

            clearStageTl
            .set( bubbleOne, {autoAlpha: 0})
            .set( bubbleTwo, {autoAlpha: 0})
            .set( bubbleThree, {autoAlpha: 0, onComplete: show() })
            ;

            function show(){
                bubbleOne.classList.remove('hide')
                bubbleTwo.classList.remove('hide')
                bubbleThree.classList.remove('hide')
            }
        return clearStageTl;
    }

    const bubbles = () =>{
        const bubbleOnePath = {
            curviness:1.25,
            values:[
                {x:100, y: -50}, {x: 60, y:0}, {x:30, y:20}, {x:-20, y:-40}, 
                {x: 90, y:-15}, {x: -40, y:0},{x:0, y:0}
            ]
        }
        const bubbleTwoPath = {
            curviness:1.25,
            values:[
                {x:-220, y: -40,}, {x: -100, y:20}, {x:0, y:-40},
                {x: -20, y:-40}, {x: -200, y:-30}, {x:0, y: 0}
            ]
        }
        const bubbleThreePath = {
            curviness:1.25,
            values:[
                {x:200, y: 0}, {x: -100, y:30}, {x:0, y:-40},
                {x: 30, y: 10}, {x: 200, y:-10}, {x:0, y: 0}
            ]
        }
        const bubblesTl = new TimelineMax()
            bubblesTl
                .fromTo(bubbleThree, 2, {scale: 0.1, transformOrigin: 'bottom center', autoAlpha: 0}, {scale:1, transformOrigin: 'bottom center', autoAlpha:1, ease: Elastic.easeOut})
                .fromTo(bubbleTwo, 2, {scale: 0.1, transformOrigin: 'bottom center', autoAlpha: 0}, {scale:1, transformOrigin: 'bottom center', autoAlpha:1, ease: Elastic.easeOut},'-=1.25')
                .fromTo(bubbleOne, 2, {scale: 0.1, transformOrigin: 'bottom center', autoAlpha: 0}, {scale:1, transformOrigin: 'bottom center', autoAlpha:1, ease: Elastic.easeOut},'-=1.25')
                .to(bubbleOne, 250, {bezier: bubbleOnePath, ease: Power4.ease}, '-=3.6')
                .to(bubbleTwo, 250, {bezier: bubbleTwoPath, ease: Power4.ease}, '-=250')
                .to(bubbleThree, 250, {bezier: bubbleThreePath, ease: Power4.ease}, '-=250')
        return bubblesTl
    }

    const go = () => {
        const masterTl = new TimelineMax()

        masterTl
            .add(clearStage(), 'clear-scene')
            .add(bubbles(), 'moving-bubbles')

        return masterTl
    }

    useEffect(()=>{
        if (bubbleThree !== null){
            go()
        }
    },[bubbleThree])


    return(
        <div className = 'contact-container page' style = {{backgroundSize:'cover'}}>
            <NavBar path = {props.location.pathname}/>
            <div className = 'circle-one hide' ref = {element => {bubbleOne = element}}/>
            <div className = 'circle-two hide' ref = {element => {bubbleTwo = element}}/>
            <div className = 'circle-three hide' ref = {element => {bubbleThree = element}}/>
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