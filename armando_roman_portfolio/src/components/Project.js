import React, { useRef, useEffect } from 'react'
import github from '../assests/images/github.png'
import computer from '../assests/images/computer.png'
import VisibilitySensor from "react-visibility-sensor";
import { Spring, config } from 'react-spring/renderprops'

const Project = props => {

    const { project } = props

    let className = ''

    if (project.hasMobileMock) {
        className = 'mobile-mock'
    }

    let container = useRef(null)

    return (
        <>
            <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                    <Spring
                        delay={150}
                        config = {config.gentle}
                        to={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? "translateX(0)" : "translateX(200px)",
                        }}
                    >
                        {props => (
                            <div
                                className='project-container'
                                ref={element => { container = element }}
                                style={props}>
                                <h2 className='project-header'>{project.projectName}</h2>
                                <div className='img-description'>
                                    <p className='project-description'>{project.projectDescription}</p>
                                    <img src={project.projectImg} className={`project-img ${className}`} alt='project-snapshot' />
                                </div>
                                <div className='project-links'>
                                    <div className='project-link'>
                                        <a href={project.githubUrl}><img src={github} alt='github icon' className='icon' />View The Code On Github</a>
                                    </div>
                                    <div className='project-link'>
                                        <a href={project.projectUrl}><img src={computer} alt='computer icon' className='icon' />View This Project</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
        </>
    )
}
export default Project