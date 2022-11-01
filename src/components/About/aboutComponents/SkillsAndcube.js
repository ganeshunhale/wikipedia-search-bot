
import React from 'react'
import useWindowDimens from "../../../hooks/useWindowDimens"

import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SkillsAndcube() {
    let { height, width } = useWindowDimens()
    console.log("winWidth", width);
    return (
        <div style={{ height: "100vh", }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgb(100,100,200,0.3)", height: "100%", width: "50vw" }}>
                <h1 style={{ fontSize: "5em", marginTop: "-8vh", paddingBottom: "8vh", fontWeight: "bolder", color: "AppWorkspace" }}>Skills</h1>
                <h2 style={{ fontSize: "3em", color: "Highlight" }}>React</h2>
                <h2 style={{ fontSize: "3em", color: "Highlight" }} >JavaScript</h2>
                <h2 style={{ fontSize: "2.5em", color: "Highlight" }} >HTML</h2>
                <h2 style={{ fontSize: "3em", color: "Highlight" }} >CSS</h2>
            </div>
            <div className="stage-cube-cont" style={width > 500 ? { zIndex: "1", width: "50vw", height: "90vh" } : { visibility: "hidden", display: "none" }}>
                <div className="cubespinner">
                    {/* <div className="face1">
        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
      </div> */}
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div></div >
    )
}

export default SkillsAndcube