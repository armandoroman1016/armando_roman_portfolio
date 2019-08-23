import React, { useEffect, useRef } from 'react'
import {TweenMax, Linear, TimelineMax, Bounce, Back, Power4 } from 'gsap';
import background from '../assests/images/background.svg'
import NavBar from './NavBar'

const LandingPage = props => {

    let nameHeader = useRef(null)
    let landingPageRole = useRef(null)
    let landingPageClickMessage = useRef(null)

    const clearStage = () => {
        const clearTl = new TimelineMax();
        clearTl
            .set(nameHeader, { autoAlpha: 0, y : -800})
            .set(landingPageRole, { autoAlpha: 0 })
            .set(landingPageClickMessage,{ autoAlpha: 0, onComplete : showText})
            ;
            
        function showText() {
            nameHeader.classList.remove('hide')
            landingPageRole.classList.remove('hide')
            landingPageClickMessage.classList.remove('hide')
        }

        return clearTl;
    }

    const enterText = () =>{
        const textTl = new TimelineMax()

        textTl
            .to(nameHeader, 1.5, {autoAlpha: 1, y : 0, x: 0, ease: Back.easeInOut})
            .fromTo(landingPageRole, 1.2, {autoAlpha: 0, scale: 0.1, x: 1800, y: -100}, { autoAlpha: 1, y: 0, x: 0, scale: 1 , ease: Power4.easeOut}, '+=0.3')
            .fromTo(landingPageClickMessage, 1.2, { autoAlpha: .1, scale: .1, x: -1800 , y: -100}, { autoAlpha : 1, scale: 1, x: 0, y: 0, ease: Power4.easeOut})
            ;

        return textTl
    }
    
    const go = () => {
        const masterTl = new TimelineMax();
            masterTl
                .add(clearStage(), 'scene-clear-stage')
                .add(enterText(), 'enter-text-tl')
    }

    useEffect(() => {
        go()
    },[])

    return(
        <div className = 'landing-container' style = {{ 
            background : 
            `url(${background}) center center` , 
            backgroundSize : 'cover', 
            backgroundColor: '#56597a'}}>
            <NavBar/>
            <h1 className = 'name-header hide' 
                ref = { element => {nameHeader = element}}>Hey , Im Armando Roman</h1>
            <h2 className = 'hide'
                ref = { element => {landingPageRole = element }} >A Full Stack Web Developer.</h2>
            <h2 className = 'hide click-message'
                ref = { element => {landingPageClickMessage = element}}>Click anywhere to get started.</h2>
        </div>
    )
}

export default LandingPage