import React, { useEffect } from "react";
import computer from "../assests/images/computer.svg";
import github from "../assests/images/github.svg";
import useWindowSize from "../hooks/WindowSize";

const Project = (props) => {
    const { project } = props;

    const { width } = useWindowSize();

    let projectRef = React.createRef();

    function projectCb(entry, observer) {
        if (entry["0"].target) {
            if (entry["0"].isIntersecting) {
                entry["0"].target.classList.add("fade_in");
                observer.unobserve(entry["0"].target);
            } else if (entry["0"].target.classList.contains("fade_in")) {
                entry["0"].target.classList.remove("fade_in");
            }
        }
    }

    const observerThreshold = width <= 500 ? 0.01 : 0.02;

    const projectOptions = {
        root: null, // is the viewport
        threshold: observerThreshold,
    };

    let observer = new IntersectionObserver(projectCb, projectOptions);

    useEffect(() => {
        if (projectRef.current) {
            observer.observe(projectRef.current);
        }
    });

    return (
        <div ref={projectRef} className="parent_project">
            <div className="project-container" style={props}>
                <h2 className="project-header">{project.projectName}</h2>
                <div className={"img-description"}>
                    <div className="description-container">
                        <p className="project-description">
                            {project.projectDescription}
                        </p>
                        {project.backendGithub && (
                            <p className="meta">
                                {" "}
                                Backend repo is{" "}
                                <a href={`${project.backendGithub}`}>here</a> .
                            </p>
                        )}
                        {project.previousUrl && (
                            <p className="meta">
                                Previous version is{" "}
                                <a href={`${project.previousUrl}`}>here</a> .
                            </p>
                        )}
                    </div>

                    {project.mobileMock && (
                        <img
                            src={project.mobileMock}
                            onClick={() =>
                                window.open(project.projectUrl, "_blank")
                            }
                            className={
                                project.desktopMock
                                    ? "project-img mobile"
                                    : "project-img mobile no-desktop"
                            }
                            alt="project-snapshot"
                        />
                    )}

                    {project.desktopMock && (
                        <img
                            src={project.desktopMock}
                            onClick={() =>
                                window.open(project.projectUrl, "_blank")
                            }
                            className={
                                project.mobileMock
                                    ? "project-img desktop"
                                    : "project-img desktop no-mobile"
                            }
                            alt="project-snapshot"
                        />
                    )}

                    {width < 1400 ? (
                        <div className="tech_project-links">
                            <div className="tech-stack">
                                <h4>Technologies Used</h4>
                                <ul>
                                    {project.techStack.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={"project-links"}>
                                <div className="project-link">
                                    <a href={project.githubUrl}>
                                        <img
                                            src={github}
                                            alt="github icon"
                                            className="icon"
                                        />
                                        View The Code
                                    </a>
                                </div>
                                <div className="project-link">
                                    <a href={project.projectUrl}>
                                        <img
                                            src={computer}
                                            alt="computer icon"
                                            className="icon"
                                        />
                                        Demo Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
                {width >= 1400 ? (
                    <div className="tech_project-links">
                        <div className="tech-stack">
                            <h4>Technologies Used</h4>
                            <ul>
                                {project.techStack.map((tech) => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="project-links">
                            <div className="project-link">
                                <a href={project.githubUrl}>
                                    <img
                                        src={github}
                                        alt="github icon"
                                        className="icon"
                                    />
                                    View The Code
                                </a>
                            </div>
                            <div className="project-link">
                                <a href={project.projectUrl}>
                                    <img
                                        src={computer}
                                        alt="computer icon"
                                        className="icon"
                                    />
                                    Demo Project
                                </a>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
export default Project;
