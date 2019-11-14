import React, {useRef, useEffect, useState} from 'react'
import {Elastic, TimelineMax, Power4 } from 'gsap';
import ClipLoader from 'react-spinners/ClipLoader';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const Contact = props => {

    const [ values, setValues ] = useState({
        name: '',
        phone: '',
        email:'', 
        company: '',
        message:''
    })

    const [ loading, setLoading ] = useState('false')

    const handleChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(values)
        setLoading(true)
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "contact": "contact", values })
          })
            .then(() => setLoading(false))
            .catch(error => {
                setLoading(false)
                alert(error)
            });
    }

    //?animations
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
                .fromTo(bubbleThree, 2, {scale: 0.1, transformOrigin: 'bottom center', autoAlpha: 0}, {scale:1, transformOrigin: 'bottom center', autoAlpha:1, ease: Elastic.easeOut},)
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

    //? end animations ^

    return(
        <div className = 'contact-container page' style = {{backgroundSize:'cover'}}>
            <div className = 'circle-one hide' ref = {element => {bubbleOne = element}}/>
            <div className = 'circle-two hide' ref = {element => {bubbleTwo = element}}/>
            <div className = 'circle-three hide' ref = {element => {bubbleThree = element}}/>
            <div className = 'form-container'>
                <h2>Contact Armando</h2>
                <form id = 'contact_form' onSubmit = {handleSubmit}>
                    <input type="hidden" name="contact" value="contact" />
                    <div className = 'input-container'>
                        <div className = 'name'>
                            <label>Name</label>
                            <input type = 'text' name = 'name' value = {values.name} onChange={handleChange} placeholder = 'Name' required/>
                        </div>
                        <div className = 'phone'>
                            <label>Phone Number</label>
                            <input type = 'text' name = 'phone' value = {values.phone} placeholder = 'Phone' onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className = 'input-container'>
                        <div className = 'email'>
                            <label>Email</label>
                            <input type = 'text' name = 'email' value = {values.email} placeholder = 'Email' onChange={handleChange} required/>
                    
                        </div>
                        <div className = 'company'>
                            <label>Company Name</label>
                            <input type = 'text' name = 'company' value = {values.company} placeholder = 'Company Name' onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className = 'input-container message'>
                        <label>Message</label>
                        <textarea rows="5" cols="50" type = 'text' name = 'message' placeholder = 'Message . . .' value = {values.message} onChange={handleChange}/>
                    </div>
                    <button type = 'submit' >
                    { loading ?        
                        <ClipLoader
                        sizeUnit={"px"}
                        size={30}
                        color={'#F7F7F7'}
                      />
                      : "SUBMIT"
                    }</button>
                </form>
            </div>
        </div>
    )
}

export default Contact