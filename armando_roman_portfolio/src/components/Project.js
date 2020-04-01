import React from 'react'
import computer from '../assests/images/computer.svg'
import github from '../assests/images/github.svg'
import VisibilitySensor from "react-visibility-sensor";
import { Spring, config } from 'react-spring/renderprops'
import useWindowSize from '../hooks/WindowSize'

const Project = props => {

    const { project } = props

    let className = ''

    const { height, width } = useWindowSize()

    // if (project.hasMobileMock) {
    //     className = 'mobile-mock'
    // }

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
                                style={props}>
                                <h2 className='project-header'>{project.projectName}</h2>
                                <div className={`img-description ${className}`}>
                                    <div className = 'description-container'>
                                        <p className='project-description'>{project.projectDescription}</p>
                                        {project.backendGithub && <p className='meta'> Backend repo is <a href = {`${project.backendGithub}`}>here</a> .</p>}
                                        {project.previousUrl && <p className='meta'>Previous version is <a href = {`${project.previousUrl}`}>here</a> .</p> }
                                    </div>

                                    {project.mobileMock && 
                                        <img src = {project.mobileMock} 
                                        className={ project.desktopMock ? `project-img mobile` :  `project-img mobile no-desktop`} 
                                        alt='project-snapshot' /> }
                                        
                                        {project.desktopMock && 
                                            <img src={project.desktopMock} 
                                            className = { project.mobileMock ? 'project-img desktop' : 'project-img desktop no-mobile' } 
                                            alt='project-snapshot' /> }

                                    { width < 1400 ? 
                                        <div className = 'tech_project-links'>
                                            <div className = 'tech-stack'>
                                                <h4>Technologies Used</h4>
                                                <ul>
                                                {
                                                    project.techStack.map(tech  =><li key = {tech}>{tech}</li>)
                                                }
                                                </ul>
                                            </div>
                                            <div className={`project-links`}>
                                                <div className='project-link'>
                                                    <a href={project.githubUrl}><img src={github} alt='github icon' className='icon' />View The Code</a>
                                                </div>
                                                <div className='project-link'>
                                                    <a href={project.projectUrl}><img src={computer} alt='computer icon' className='icon' />Demo Project</a>
                                                </div>
                                            </div> 
                                        </div>
                                        : 
                                        null
                                    }

                                </div>
                                { width >= 1400 ? <div className = 'tech_project-links'>
                                <div className = 'tech-stack'>
                                    <h4>Technologies Used</h4>
                                    <ul>
                                    {
                                        project.techStack.map(tech  =><li key = {tech}>{tech}</li>)
                                    }
                                    </ul>
                                </div>
                                <div className='project-links'>
                                    <div className='project-link'>
                                        <a href={project.githubUrl}><img src={github} alt='github icon' className='icon' />View The Code</a>
                                    </div>
                                    <div className='project-link'>
                                        <a href={project.projectUrl}><img src={computer} alt='computer icon' className='icon' />Demo Project</a>
                                    </div>
                                </div> 
                            </div>
                            : 
                            null
                        }
                            </div>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
        </>
    )
}
export default Project
