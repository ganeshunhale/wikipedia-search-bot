import React from 'react'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'

function SpinningCube() {
    return (
        <div className="container about-page" style={{ width: "90vw", height: "90vh", backgroundColor: "red", zIndex: "100" }}><div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1 divclass">
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className="face2 divclass">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3 divclass">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4 divclass">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5 divclass">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6 divclass">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
            </div>
        </div></div>
    )
}

export default SpinningCube