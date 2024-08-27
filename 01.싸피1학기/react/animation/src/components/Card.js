import React, {CSSProperties, useRef, useState} from "react";
import {motion} from 'framer-motion';
import styled from "styled-components";
import './Card.css'

const Card = function() {
    return (
        <div className="main-container">
            <div className="card-1">
                <div className="card-1-front">카드 앞면</div>
                <div className="card-1-back">카드 뒷면</div>
            </div>
            <div className="card-2">
                <div className="card-2-front">카드 앞면</div>
                <div className="card-2-back">카드 뒷면</div>
            </div>
            <div className="card-3">
                <div className="card-3-front">카드 앞면</div>
                <div className="card-3-back">카드 뒷면</div>
            </div>
            <div className="card-4">
                <motion.div
                    initial={{opacity: 0, x: -2000, y: 500}}
                    animate={{opacity: 1, x: 0, y: 0}}
                    transition={{duration: 2.5}}
                ></motion.div>
            </div>
        </div>
    )
}

export default Card;