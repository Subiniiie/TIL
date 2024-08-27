import React, {useState, useEffect} from "react";
import {useSpring, animated} from "@react-spring/web";
import styled from "styled-components";
import "./Slide.css"

const Slide = () => {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY)
    const [slide, setSlide] = useState(true)

    const handleScroll = () => {
        setScrollPosition(window.scrollY)

        if (window.scrollY > 165) {
            setSlide(false)
        } else {
            setSlide(true)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])





    return (
        <div className="main-container-1">
            <section>
                <animated.h1 className={slide ? "slide" : "disappear"}>PICK YOUR FAVORITE</animated.h1>
                <img className="photo" src="https://image.istarbucks.co.kr/upload/common/img/main/2024/25th_summer_pick_img.png"></img>
            </section>
        </div>
    )
}

export default Slide;