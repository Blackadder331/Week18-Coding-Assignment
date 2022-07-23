import React from "react";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-xxxl navbar-light fixed-top bg-light">
        <div className="container" id="nav-custom">
            {/* <a class="navbar-brand" href="#">Orden INV</a> */}
            <a href="#">
            <img
                src="images/ORDEN-logo.svg"
                className="logo"
                style={{ maxHeight: 60, height: 60 }}
                alt="ORDEN INV Logo"
            />
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <br />
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    About
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Rentals
                </a>
                </li>
                {/* <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
            </ul>
            {/* <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            </div>
        </div>
        </nav>
    )
};

export default Nav;