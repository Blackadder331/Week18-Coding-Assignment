import React from "react";
import officemap from '../Assets/office-map.png'

const OfficeMap = () => {
    return(
        <div>
            <img draggable='false' border="0" src={officemap} className="office-map image-fluid"/>
        </div>
    )
}

export default OfficeMap;