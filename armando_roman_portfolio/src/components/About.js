import React from "react";

const About = () => {
    return (
        <section className="about-container">
            <div className="about-text">
                <h2>
                    Who Is Armando Roman<span> ?</span>
                </h2>
                <div className="copy">
                    <p>
                        Hi, I&apos;m Armando Roman and I am a Full Stack Web
                        Developer that truly enjoys building products that will
                        benefit many people. I have been programming for the
                        better part of one year now.
                    </p>
                    <p>
                        My favorite part of being a developer is overcoming all
                        the challenges that we constantly face. That is actually
                        a pretty big reason for me wanting to become a dev in
                        the first place.
                    </p>
                    <p>
                        When I&apos;m not at the computer. You can find me out
                        with my family, probably enjoying some fresh BBQ. If you
                        would like to chat about the latest technologies,
                        coffee, or the Raiders contact me.
                    </p>
                </div>
            </div>
            <div className="skills">
                <h3>Skills and Familiar Technologies</h3>
                <ul>
                    <div className="li-container">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Python</li>
                    </div>
                    <div className="li-container">
                        <li>SCSS</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Relational DB&apos;s</li>
                    </div>
                </ul>
            </div>
            <span className="background-text javascript">JAVASCRIPT</span>
            <span className="background-text css">CSS</span>
            <span className="background-text react">REACTJS</span>
            <span className="background-text node">NODE</span>
            <span className="background-text python">PYTHON</span>
            <span className="background-text html">HTML</span>
            <span className="background-text express">EXPRESSJS</span>
        </section>
    );
};

export default About;
