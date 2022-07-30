import React from "react";
import Brick from '../Assets/brick.png'


const Hero = () => {
    return(
        <div className="container col-sm px-4 py-5 hero">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 brick-row">
                <div className="col-10 col-sm-8 col-lg-6 brick-container">
                <img
                    src={Brick}
                    className="d-block mx-lg-auto img-fluid brick animate__animated animate__fadeIn animate__delay-1s"
                    alt="a brick on an orage field of color"
                    draggable='false' border="0"
                    width={700}
                    height={500}
                    loading="lazy"
                />
                </div>
                <div className="col-lg-6 orden-container animate__animated animate__fadeInUp">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                    Orden INV
                </h1>
                <h3 className="lead">
                real estate + development company
                </h3>
                <br></br>
                {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-success btn-lg px-4 me-md-2">
                    Primary
                    </button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                    Default
                    </button>
                </div> */}
                </div>
            </div>
        </div>
    )
};

export default Hero;

