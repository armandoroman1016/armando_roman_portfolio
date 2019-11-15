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

    const [ message, setMessage ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ submitted, setSubmitted ] = useState(false)

    const handleChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSubmitted(true)
        if( (values.email || values.phone) && values.name && values.company ){
            setLoading(true)
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...values })
              })
                .then(() => {
                    setLoading(false)
                    setMessage("Thank you, I'll get back to you ASAP")
                })
                .catch(() => {
                    setLoading(false)
                    setMessage("Unfortunately your message was unable to send at the moment.")
                });
        }
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
                    <div className = 'input-container'>
                        <div className = 'name'>
                            <label>
                                Name
                                { submitted && !values.name ? <p>*Required</p> : null}
                            </label>
                            <input type = 'text' name = 'name' value = {values.name} onChange={handleChange} placeholder = 'Name'/>
                        </div>
                        <div className = 'phone'>
                            <label>
                                Phone
                                { submitted && (!values.phone && !values.email) ? <p>*Phone or Email Required</p> : null}
                            </label>
                            <input type = 'text' name = 'phone' value = {values.phone} placeholder = 'Phone' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className = 'input-container'>
                        <div className = 'email'>
                            <label>
                                Email
                                { submitted && (!values.phone && !values.email) ? <p>*Phone or Email Required</p> : null}
                            </label>
                            <input type = 'text' name = 'email' value = {values.email} placeholder = 'Email' onChange={handleChange} />
                    
                        </div>
                        <div className = 'company'>
                            <label>
                                Company
                                { submitted && !values.company ? <p>*Required</p> : null}
                            </label>
                            <input type = 'text' name = 'company' value = {values.company} placeholder = 'Company Name' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className = 'input-container message'>
                        <label>Message</label>
                        <textarea rows="5" cols="50" type = 'text' name = 'message' placeholder = 'Message . . .' value = {values.message} onChange={handleChange}/>
                    </div>
                    <div className = 'button_message'>
                    <button type = 'submit' >
                    { !loading ?        
                        "SUBMIT"
                        : <ClipLoader
                        sizeUnit={"px"}
                        size={30}
                        color={'#F7F7F7'}
                        />
                    }</button>
                    { message ? 
                        <p className = 'response-message'>{message}</p>
                        : null 
                    }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact