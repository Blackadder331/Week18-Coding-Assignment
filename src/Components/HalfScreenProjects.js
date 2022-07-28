import React from "react";
import { Container } from "react-bootstrap";
// import Row from "react-bootstrap";
// import Col from "react-bootstrap";

const HalfScreenProjects = () => {
    return (
    <div className="container-fluid">
        <div className="row half-screen-projects" >
            <div className="col-sm text-col">
                <div className="text-col-content-projects">
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet magna.</p>
                    <br></br>
                    <a href="/projects" className="btn btn-primary">Call to action</a>
                </div>
            </div>
            <div className="col-sm image-col-projects"></div>
        </div>
    </div>
    )
};

export default HalfScreenProjects;
