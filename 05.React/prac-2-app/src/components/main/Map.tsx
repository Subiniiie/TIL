import React, { useEffect, useRef } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

const { kakao } = window;

export const Map = () => {
    
    const container = useRef(null);
    useEffect(() => {
        const position = new kakao.maps.LatLng(35.114513, 129.039346);
        const options = {
            center: position,
            level: 3,
        };

        const map = new kakao.maps.Map(container.current, options);
    }, []);

    return (
        <>
            <div ref={container} style={{ width: '700px', height: '400px'}}/>
        </>
    )

}