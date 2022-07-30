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
                    <p>We believe in targeted and systematic development. Each lot is part of a collective ecosystem that deserves careful consideration.</p>
                    <br></br>
                    <a href="/projects" className="btn btn-primary btn-background-slide">View our homes</a>
                </div>
            </div>
            <div className="col-md image-col-projects"></div>
        </div>
    </div>
    )
};

export default HalfScreenProjects;
