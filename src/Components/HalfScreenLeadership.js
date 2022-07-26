import React from "react";
import { Container } from "react-bootstrap";
// import Row from "react-bootstrap";
// import Col from "react-bootstrap";

const HalfScreenLeadership = () => {
    return (
        <div className="container-fluid">
        <div className="row half-screen-leadership" >
            
            <div className="col-sm image-col">1 of 2</div>
            <div className="col-sm text-col">
                <div className="text-col-content-leadership">
                    <h2>Leadership and vision</h2>
                    <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet magna.</p>
                    <button className="btn btn-primary">Call to action</button>
                </div>
            </div>
            
        </div>
    </div>
    )
};

export default HalfScreenLeadership;
