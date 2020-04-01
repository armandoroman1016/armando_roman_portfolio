import React from 'react'
import { projects } from '../data/projects'
import Project from './Project'
import Footer from '../components/Footer.js'

const Projects = props => {

    return(
        <section className = 'projects-section page' id = "projects-container">
        <div className = 'projects-container'>
        <h1>The Work</h1>
            {projects.map( project => {
                return(
                    <Project key = {project.id} project = {project}/>
                )
            })}
        </div>
        </section>
    )
}

export default Projects