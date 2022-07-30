import React from "react";
import { NavLink } from "react-router-dom";
import ORDENlogoreversed from '../Assets/ORDEN_logo_reversed.svg'
import footerarrow from '../Assets/footer-arrow.svg'


const Footer = () => {
    return (
        <footer className="container-fluid">
        <div className="container">
            

           
            <br />
            <div className="row align-items-center">
                <div className="col-lg-6 logo-footer">
                    <div>
                        <NavLink 
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        className="nav-link"
                        activeclassname="active"
                        to="/" 
                        onClick={'data-bs-target="#navbarCollapse"'}
                        >
                        {/* <a href=" "> */}
                            <img
                                src={ORDENlogoreversed}
                                className="logo"
                                style={{ height: 60 }}
                                alt="ORDEN INV Logo"
                            />
                        {/* </a> */}
                        </NavLink>
                    </div>
                </div>
                <div className="col-lg">
                    <p><strong>Address</strong>
                    <br />100 W. Center Street 
                    <br />Suite 300
                    <br />Fayetteville, Arkansas 
                    <br />72701
                    </p>
                </div>
                <div className="col-lg">
                    <div>
                        <p><strong>Contact</strong>
                        <br />rob@sharparch.net
                        <br />479 442 0229
                        <br /><br />
                        © {(new Date().getFullYear())} Orden INV, LLC. 
                        <br />
                        </p>
                    </div>
                </div>
                <div className="col-lg back-to-top">
                    <div>
                        <p className="float-end">
                        <a href="#"><img
                                src={footerarrow}
                                className="blink footer-arrow"
                                style={{ height: 65 }}
                                alt="Back to top arrow"
                            /><br></br>Back to top</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer;