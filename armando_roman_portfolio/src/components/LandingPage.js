import React from "react";

const LandingPage = (props) => {
    return (
        <div className="landing-container">
            <div className="web-dev-container">
                <div className="web">
                    <p className="opening-tags">{"<script>"}</p>
                    <p className="web-text">
                        WEB
                        <span className="hello">
                            Hello<span className="period">.</span>
                        </span>
                    </p>
                </div>
                <div className="dev">
                    <p className="dev-text">DEV</p>
                    <p className="closing-tags">{"</script>"}</p>
                </div>
            </div>
            <div className="name-container">
                <p className="name">
                    I am
                    <br />
                    Armando Roman<span>.</span>
                </p>
                <p className="role">A Full Stack Web Developer</p>
            </div>
        </div>
    );
};

export default LandingPage;
