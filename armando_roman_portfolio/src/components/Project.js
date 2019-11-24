import React from 'react'
import computer from '../assests/images/computer.png'
import github from '../assests/images/github.png'
import VisibilitySensor from "react-visibility-sensor";
import { Spring, config } from 'react-spring/renderprops'
import useWindowSize from '../hooks/WindowSize'

const Project = props => {

    const { project } = props

    let className = ''

    const { height, width } = useWindowSize()

    if (project.hasMobileMock) {
        className = 'mobile-mock'
    }

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
                                    <p className='project-description'>{project.projectDescription}</p>
                                    <img src={project.projectImg} className={`project-img`} alt='project-snapshot' />
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

// import React from 'react'
// import computer from '../assests/images/computer.png'
// import github from '../assests/images/github.png'
// import VisibilitySensor from "react-visibility-sensor";
// import { Spring, config } from 'react-spring/renderprops'
// import useWindowSize from '../hooks/WindowSize'

// const Project = props => {

//     const { project } = props

//     let className = ''

//     const { height, width } = useWindowSize()

//     if (project.hasMobileMock) {
//         className = 'mobile-mock'
//     }

//     return (
//         <>
//             <VisibilitySensor partialVisibility>
//                 {({ isVisible }) => (
//                     <Spring
//                         delay={150}
//                         config = {config.gentle}
//                         to={{
//                             opacity: isVisible ? 1 : 0,
//                             transform: isVisible ? "translateX(0)" : "translateX(200px)",
//                         }}
//                     >
//                         {props => (
//                             <div
//                                 className='project-container'
//                                 style={props}>
//                                 <h2 className='project-header'>{project.projectName}</h2>
//                                 <div className={`img-description ${className}`}>
//                                     <p className='project-description'>{project.projectDescription}</p>
//                                     <img src={project.projectImg} className={`project-img`} alt='project-snapshot' />
//                                     { width < 1400 ? 
//                                         <div className = 'tech_links'>
//                                             <div className='project-links'>
//                                                 <div className='project-link'>
//                                                     <a href={project.githubUrl}><img src={github} alt='github icon' className='icon' />View The Code</a>
//                                                 </div>
//                                                 <div className='project-link'>
//                                                     <a href={project.projectUrl}><img src={computer} alt='computer icon' className='icon' />Demo Project</a>
//                                                 </div>
//                                             </div>
//                                             <div className = 'tech-stack'>
//                                                 <h4>Technologies Used</h4>
//                                                 <ul>
//                                                 {
//                                                     project.techStack.map(tech  =><li key = {tech}>{tech}</li>)
//                                                 }
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     : 
//                                     null
//                                 }
//                                 </div>
//                                 { width >= 1400 ? <div className='project-links'>
//                                 <div className='project-link'>
//                                     <a href={project.githubUrl}><img src={github} alt='github icon' className='icon' />View The Code</a>
//                                 </div>
//                                 <div className='project-link'>
//                                     <a href={project.projectUrl}><img src={computer} alt='computer icon' className='icon' />Demo Project</a>
//                                 </div>
//                             </div> 
//                             : 
//                             null
//                         }
//                             </div>
//                         )}
//                     </Spring>
//                 )}
//             </VisibilitySensor>
//         </>
//     )
// }
// export default Project