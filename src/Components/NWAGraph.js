import React from "react";
import graph from '../Assets/graph.png'

const NWAGraph = () => {
    return(
        <div>
            <img draggable='false' border="0" src={graph} className="nwa-graph image-fluid"/>
        </div>
    )
}

export default NWAGraph;