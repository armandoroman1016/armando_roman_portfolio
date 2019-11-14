import React from 'react'
import { projects } from '../data/projects'
import Project from './Project'

const Projects = props => {

    return(
        <section className = 'projects-section page'>
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