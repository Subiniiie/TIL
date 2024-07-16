import React, {CSSProperties, useRef, useState} from "react";
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
        </div>
    )
}

export default Card;