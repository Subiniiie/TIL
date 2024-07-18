import React from "react";
import {motion, useMotionValue, useSpring, useTransform} from "framer-motion"
import './Pokemon.css'

const Pocketmon = function() {
    const handleMouseMove = function(event) {
        console.log(event.target.getBoundingClientReact())
    }
    return (
        <body>
            <div className="frame" onMouseMove={handleMouseMove}>
                <div className="card"></div>
            </div>
        </body>
    )
}

export default Pocketmon;