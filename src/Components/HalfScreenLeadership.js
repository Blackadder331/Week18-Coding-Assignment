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
                    <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet magna.</p>
                    <br></br>
                    <a href="/about" className="btn btn-primary btn-background-slide">
                        Call to action</a>
                </div>
            </div>
            
        </div>
    </div>
    )
};

export default HalfScreenLeadership;
