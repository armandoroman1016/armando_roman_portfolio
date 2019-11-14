import React, { useEffect, useRef } from 'react'
// import {TweenMax, Linear, TimelineMax, Bounce, Back, Power4 } from 'gsap';

const LandingPage = props => {


    // let nameHeader = useRef(null)
    // let landingPageRole = useRef(null)

    // const clearStage = () => {
    //     const clearTl = new TimelineMax();
    //     clearTl
    //         .set(nameHeader, { autoAlpha: 0, y : -800})
    //         .set(landingPageRole, { autoAlpha: 0, onComplete : showText})
    //         ;
            
    //     function showText(){
    //         nameHeader.classList.remove('hide')
    //         landingPageRole.classList.remove('hide')
    //     }

    //     return clearTl;
    // }

    // const enterText = () =>{
    //     const textTl = new TimelineMax()

    //     textTl
    //         .to(nameHeader, 1.5, {autoAlpha: 1, y : 0, x: 0, ease: Back.easeInOut})
    //         .fromTo(landingPageRole, 1.8, {autoAlpha: 0, scale: 0.1, x: 550, y: -100,},{ autoAlpha: 1, y: 0, x: 0, scale: 1 , ease: Power4.easeInOut}, '-=0.4')
    //         ;

    //     return textTl
    // }
    
    // const go = () => {
    //     const masterTl = new TimelineMax();
    //         masterTl
    //             .add(clearStage(), 'scene-clear-stage')
    //             .add(enterText(), 'enter-text-tl')
    // }

    // useEffect(() => {
    //     go()
    // },[])

    return(
        <div className = 'landing-container'>
            <div className = 'web-dev-container'>
                <div className = 'web'>
                    <p className = 'opening-tags'>{`<html>`}</p>
                    <p className = 'web-text'>
                        WEB
                        <span className = 'hello'>Hello<span className = 'period'>.</span></span>
                    </p>   
                </div>
                <div className = 'dev'>
                    <p className = 'dev-text'>DEV</p>
                    <p className = 'closing-tags'>{`</html>`}</p>
                </div>            
            </div>
            <div className = 'name-container'>
                <p className = 'name'>I am<br/>Armando Roman<span>.</span></p>
                <p className = 'role'>A Full Stack Web Developer</p>
            </div>
        </div>
    )
}

export default LandingPage