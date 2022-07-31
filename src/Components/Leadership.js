import React from "react";
import Rob from '../Assets/Robert.jpg'
import Reynolds from '../Assets/Reynolds.png'

const Leadership = () => {
    return(
        <div className="container leadership-contianer">
            <div className="row">
                <div className="col-md-6">
                    <h2>Leadership</h2>
                    <br></br>
                    {/* <h3>Lorem ipsum dolor sit amet, cons ectetuer adipis cing elit, sed diam nonummy nibh euis mod wer ut laoreet magna.</h3>  */}
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-6">
                    <img src={Rob} style={{maxWidth: '270px', paddingBottom: '40px'}}/>
                    <h3>Robert Sharp</h3>
                    <h4>Owner + Architect</h4>
                    <br></br>
                    <p>
                    Robert Sharp is an architect and developer that works in his hometown of Fayetteville, Arkansas. His design ethic is deeply rooted in the history, patterns, and construction methods of the Ozark region. Over the years, he has developed expertise in designing mixed-use buildings and has deep experience in adaptive re-use and historic restoration. Robert also specializes in two and three story courtyard apartment buildings in urban settings. In addition, he has experience in designing single family housing at every scale, including cottages, townhouses, and large estates. Robert Sharp is active in the community and serves on the Planning Commission and on the board of Partners for Better Housing, a local non-profit that is dedicated to providing efficient and dignified housing in Fayetteville’s Walker Park Neighborhood.                    </p>
                    <br></br>
                    <div className="contact-info-leadership">
                        <ul>
                            <li>
                                Qualification
                            </li>
                            <li>
                                Qualification
                            </li>
                            <li>
                                Qualification
                            </li>
                            <li>
                                Qualification
                            </li>
                            <li>
                                Qualification
                            </li>
                            <li>
                                Qualification
                            </li>
                            <li>
                                Qualification
                            </li>
                        </ul>
                        <br></br>
                        <br></br>
                    </div>
                </div>

                <div className="col-md-6">
                    <img src={Reynolds} style={{maxWidth: '270px', paddingBottom: '40px'}}/>
                    <h3>Reynolds Sharp</h3>
                    <h4>Owner + Designer</h4>
                    <br></br>
                    <p>
                    Reynolds Sharp is a graphic designer employed by the creative agency DOXA in Fayetteville, Arkansas. He also served on the local AIGA (American Institute of Graphic Arts) board as the Communications Director from 2017–2020, fighting for a more inclusive and design-driven Northwest Arkansas.</p>
                    <br></br>
                    <div className="contact-info-leadership">
                        <ul>
                            <li>
                                Qualification
                            </li>
                            <li>
                                Qualification
                            </li>
                            <li>
                                Qualification
                            </li>
                            <li>
                                Qualification
                            </li>
                            <li>
                                Qualification
                            </li>
                            <li>
                                Qualification
                            </li>
                            <li>
                                Qualification
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leadership;