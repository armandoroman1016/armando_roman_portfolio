import React from 'react'
import { projects } from '../data/projects'
import NavBar from './NavBar'
const Projects = props => {

    return(
        <section className = 'projects-section'>
        <NavBar path = {props.location.pathname}/>
        <h1>The Work</h1>
        <div className = 'projects-container'>
            {projects.map( project => {
                return(
                    <div key = {project.id} className = 'project-container'>
                        <h2 className = 'project-header'>{project.projectName}</h2>
                        <img src = {project.projectImg} className = 'project-img' alt = 'project-snapshot'/>
                        <p className = 'project-description'>{project.projectDescription}</p>
                        <div className = 'project-links'>
                            <div className = 'project-link'>
                                
                                <a href = {project.githubUrl}>View The Code On Github</a>
                            </div>
                            <div className = 'project-link'>
                                
                                <a href = {project.projectUrl}>View This Project</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </section>
    )
}

export default Projects