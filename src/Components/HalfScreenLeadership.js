import React from "react";
import { Container } from "react-bootstrap";
// import Row from "react-bootstrap";
// import Col from "react-bootstrap";

const HalfScreenLeadership = () => {
    return (
        <div className="container-fluid">
        <div className="row half-screen-leadership" >
            
            <div className="col-md image-col-leadership"></div>
            <div className="col-sm text-col">
                <div className="text-col-content-leadership">
                    <h2>Leadership and vision</h2>
                    <p>Every community needs both nature and nurture. We are uniquely positioned to grow our region without losing our core identity.</p>
                    <br></br>
                    <a href="/about" className="btn btn-primary btn-background-slide">
                        Read our story</a>
                </div>
            </div>
            
        </div>
    </div>
    )
};

export default HalfScreenLeadership;
