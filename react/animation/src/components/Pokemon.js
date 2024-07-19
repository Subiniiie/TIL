import React , {useEffect} from "react";
import vanillaTilt from 'vanilla-tilt'
import './Pokemon.css'

const Pokemon = function() {
    useEffect(() => {
        const elements = document.querySelectorAll(".card")
        vanillaTilt.init(elements, {
            max: 25,
            speed: 400
        })

        return () => {
            elements.forEach(element => {
                element.vanillaTilt.destroy()
            })
        }
    }, [])
    return (
        <div className="main-container">
            <div className="container">
                <div className="card">
                    <div className="content">
                        <h2>01</h2>
                        <h3>Card One</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>02</h2>
                        <h3>Card Two</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>03</h2>
                        <h3>Card Three</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;