import React from "react";
import "./Rotation.css"
import img1 from "../image/zhanghao/1.jpg"
import img2 from "../image/zhanghao/2.jpg"
import img3 from "../image/zhanghao/3.jpg"
import img4 from "../image/zhanghao/4.jpg"
import img5 from "../image/zhanghao/5.jpg"
import img6 from "../image/zhanghao/6.jpg"
import img7 from "../image/zhanghao/7.jpg"
import img8 from "../image/zhanghao/8.jpg"
import img9 from "../image/zhanghao/9.jpg"
import img10 from "../image/zhanghao/10.jpg"

const Rotation = function() {
    const angleIncrement = 360 / 10
    return (
        <div className="main-container-3">
            <div className="satellites1">
                <img className="satellite1" src={img1} alt="img"></img>
                <img className="satellite1" src={img2} alt="img"></img>
                <img className="satellite1" src={img3} alt="img"></img>
                <img className="satellite1" src={img4} alt="img"></img>
                <img className="satellite1" src={img5} alt="img"></img>
                <img className="satellite1" src={img6} alt="img"></img>
                <img className="satellite1" src={img7} alt="img"></img>
                <img className="satellite1" src={img8} alt="img"></img>
                <img className="satellite1" src={img9} alt="img"></img>
                <img className="satellite1" src={img10} alt="img"></img>
            </div>
            <div className="satellites2">
                <img className="satellite2" style={{"--i": 0}} src={img1} alt="img"></img>
                <img className="satellite2" style={{"--i": 36}} src={img2} alt="img"></img>
                <img className="satellite2" style={{"--i": 72}} src={img3} alt="img"></img>
                <img className="satellite2" style={{"--i": 108}} src={img4} alt="img"></img>
                <img className="satellite2" style={{"--i": 144}} src={img5} alt="img"></img>
                <img className="satellite2" style={{"--i": 180}} src={img6} alt="img"></img>
                <img className="satellite2" style={{"--i": 216}} src={img7} alt="img"></img>
                <img className="satellite2" style={{"--i": 252}} src={img8} alt="img"></img>
                <img className="satellite2" style={{"--i": 288}} src={img9} alt="img"></img>
                <img className="satellite2" style={{"--i": 324}} src={img10} alt="img"></img>
            </div>
            <div className="satellites3">
                <img className="satellite3" style={{"--i": 0, top: "-30px"}} src={img1} alt="img"></img>
                <img className="satellite3" style={{"--i": 36, top: "14px"}} src={img2} alt="img"></img>
                <img className="satellite3" style={{"--i": 72, top: "-6px" }} src={img3} alt="img"></img>
                <img className="satellite3" style={{"--i": 108, top: "25px" }} src={img4} alt="img"></img>
                <img className="satellite3" style={{"--i": 144, top: "17px" }} src={img5} alt="img"></img>
                <img className="satellite3" style={{"--i": 180, top: "-4px" }} src={img6} alt="img"></img>
                <img className="satellite3" style={{"--i": 216, top: "5px" }} src={img7} alt="img"></img>
                <img className="satellite3" style={{"--i": 252, top: "-11px" }} src={img8} alt="img"></img>
                <img className="satellite3" style={{"--i": 288, top: "13px" }} src={img9} alt="img"></img>
                <img className="satellite3" style={{"--i": 324, top: "-2px" }} src={img10} alt="img"></img>
            </div>
        </div>
    )
}

export default Rotation;