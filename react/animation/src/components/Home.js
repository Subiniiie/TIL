import React from "react";
import { Link } from "react-router-dom";


const Home = function() {
    return (
        <div>
           <div><Link to='/slide'>Go To Slide</Link></div>
           <div><Link to='/scrolling'>Go To Scrolling</Link></div>
           <div><Link to='/rotation'>Go To Rotation</Link></div>
           <div><Link to='/motion'>Go To Motion</Link></div>
           <div><Link to='/card'>Go To Card</Link></div>
           <div><Link to='/masuri'>Go To Masuri</Link></div>
           <div><Link to='/pokemon'>Go To Pokemon</Link></div>
        </div>
    )
}

export default Home;