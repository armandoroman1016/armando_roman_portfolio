import React from 'react'
import { projects } from '../data/projects'
import NavBar from './NavBar'
import github from '../assests/images/github.png'
import computer from '../assests/images/computer.png'

const Projects = props => {

    return(
        <section className = 'projects-section'>
        <NavBar path = {props.location.pathname}/>
        <div className = 'projects-container'>
        <h1>The Work</h1>
            {projects.map( project => {
                return(
                    <div key = {project.id} className = 'project-container'>
                        <h2 className = 'project-header'>{project.projectName}</h2>
                        <div className = 'img-description'>
                            <p className = 'project-description'>{project.projectDescription}</p>
                            <img src = {project.projectImg} className = 'project-img' alt = 'project-snapshot'/>
                        </div>
                        <div className = 'project-links'>
                            <div className = 'project-link'>
                                <a href = {project.githubUrl}><img src = {github} alt = 'github icon' className = 'icon'/>View The Code On Github</a>
                            </div>
                            <div className = 'project-link'>
                                <a href = {project.projectUrl}><img src = {computer} alt = 'computer icon' className = 'icon' />View This Project</a>
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