import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll } from "react-scroll";

const MobileNav = () => {

  const [ scrolled, setScrolled ] = useState(false)

  const [ lastScroll, setLastScroll ] = useState(Date.now())

  const handleScroll  = () => {

    const time = Date.now()

    const timePassed = time - lastScroll
    // console.log(timePassed)
    // if the user hasn't scrolled within 5 seconds update the last scroll time
    
    //boolean on whether user is at top position
    const onTop = window.scrollY < 100;

    // if user is on top 
    if(timePassed > 3000){
      setLastScroll(time)
      setScrolled(true)   
    }else if(timePassed <= 3000 || onTop){
      setScrolled(true)
    }else{
      return
    }

  }
  
  useEffect(() => {
   
  const watchScroll = () => window.addEventListener('scroll', handleScroll);

  watchScroll();

  return () =>  window.removeEventListener('scroll', handleScroll);

  })

  useEffect(() => {
     
    // checking after 5 seconds after the last update to nav bar
    setTimeout(() => {
      // if 5 seconds have passed set scrolled to false
      if(Date.now() - lastScroll > 3000){
        setScrolled(false)
      }else{
        setScrolled(true)
      }
    }, 6000)

  },[lastScroll])

  return (
    <div className={scrolled ? 'nav-bar scrolled' : `nav-bar`}>
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
