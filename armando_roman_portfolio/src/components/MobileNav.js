import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll } from "react-scroll";
import logo from '../assests/images/logo.svg'

const MobileNav = () => {

  // boolean to check if users is scrolling or recently scrolled
  const [ scrolled, setScrolled ] = useState(false)

  //default value of null updates value on scroll event if enough time has passed
  const [ lastScroll, setLastScroll ] = useState(null)

  // checks if page position is on top
  const [ top, setTop ] = useState(true)

  const handleScroll  = () => {

    // storing value for use in multiple areas of function
    const time = Date.now()

    let timePassed

    //if lastScroll is a valid time 
    if(lastScroll){
       timePassed = time - lastScroll

    //if last scroll is falsy i.e null
    }else{
        timePassed = time 
    }
      
      // if the user hasn't scrolled within 5 seconds update the last scroll time
      
      //boolean on whether user is at top position
      const onTop = window.scrollY < 100;

      // checking if user is on top
      if(onTop){
        setTop(true)
      }else if( !onTop ){
        setTop(false)
      }

      //if 2 seconds have passed since last scroll update new time and set scrolling to true 
      if(timePassed >= 2000){
        setLastScroll(time)
        setScrolled(true)   
        
        // if under 2 seconds from last scroll set scroll to true DONT update time
      }else if(timePassed < 2000){
        setScrolled(true)

      }

  }
  
  useEffect(() => {
   
  const watchScroll = () => window.addEventListener('scroll', handleScroll);

  watchScroll();

  return () =>  window.removeEventListener('scroll', handleScroll);

  })

  useEffect(() => {

     if(lastScroll){
       // checking after 5 seconds after the last update to nav bar
       setTimeout(() => {
         // if 5 seconds have passed set scrolled to false
         if(Date.now() - lastScroll > 2000){
           setScrolled(false)
         }else{
           setScrolled(true)
         }
        }, 2000)
      }

  },[lastScroll])

  return (
    <div className={!scrolled || top ? 'nav-bar scrolled' : `nav-bar`}>
    <img src = {logo} />
      <ul className="nav-links">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="landing-container"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="projects-container"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="about-container"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="contact-container"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
