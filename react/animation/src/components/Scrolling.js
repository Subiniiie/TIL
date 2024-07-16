import React, {useEffect, useState} from "react";
import "./Scrolling.css"

const Scrolling = () => {
    const completedTitle = "Lorem Ipsum"

    const [landingTitle, setLandingTitle] = useState("")
    const [count, setCount] = useState(0)


    useEffect(() => {
        const interval = setTimeout(() => {
             if (count < completedTitle.length) {
                setLandingTitle(prev => prev + completedTitle[count])
                setCount(prev => prev + 1)
             } else {
                clearTimeout(interval)
             }
        }, 100)
        return () => clearTimeout(interval)
    }, [count])



    return (
        <div className="main-container-2">
            <div className="blue-box">
                <div className="blue-box-text">
                    <h2>BLUE SKY</h2>
                </div>
            </div>
            <div className="violet-box">
                <div className="violet-box-text">
                    <h2>VIOLET SUNSET</h2>
                </div>
            </div>
            <div>
                <h1 className="title">{landingTitle}</h1>
                    <p className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p className="desc2">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                    <p className="desc3">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>
            </div>
        </div>
    )
}

export default Scrolling;