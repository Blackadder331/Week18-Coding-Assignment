import React from "react";


const Hero = () => {
    return(
        <div className="container col-sm px-4 py-5 hero">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                <img
                    src="./images/Brick.png"
                    className="d-block mx-lg-auto img-fluid brick"
                    alt="Bootstrap Themes"
                    width={700}
                    height={500}
                    loading="lazy"
                />
                </div>
                <div className="col-lg-6">
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

