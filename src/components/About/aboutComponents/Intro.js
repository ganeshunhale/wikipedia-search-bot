import React, { useEffect, useState } from "react";
import "./stars.css";
import TypeAnimation from 'react-type-animation';
import "./style.css";

import ganesh from "../../../components/Images/Ganesh_Profile_Photo.jpg";
const Intro = () => {


    return (
        // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
        <div id="home" className="intro ">


            <div className="intro-content display-table">
                <div className="table-cell">
                    <img src={ganesh} alt="ganesh" style={{ width: "110px", height: "auto", borderRadius: "2vw", zIndex: "1" }} />
                    <div className="container">

                        <h1 className="intro-title mb-4">Hello, I am Ganesh Unhale</h1>
                        <p className="intro-subtitle">
                            <span className="text-slider-items"></span>
                            <strong className="text-slider">
                                <div>
                                    <TypeAnimation
                                        cursor={true}
                                        sequence={['React Developer', 10000, 'Frontend Developer']}
                                        repeat={10}
                                        typeSpeed={7}

                                    // wrapper="div"
                                    // className="type"

                                    /></div>
                                {/* <Typing.Speed ms={20} />
                                    then this will be typed at 20ms/character. */}
                                {/* <Typed
                                    strings={[
                                        "Front End Developer",
                                        "React Developer",
                                        "Javascript Developer"
                                    ]}
                                    
                                    backDelay={1100}
                                    backSpeed={30}
                                    loop
                                /> */}
                            </strong>
                        </p>
                        <p className="pt-3">
                            <a
                                className="btn btn-primary btn js-scroll px-4"
                                href="#work"
                                role="button"
                            >
                                View My Work
                            </a>
                        </p>
                    </div>
                    {/* <div className="stage-cube-cont" style={{ visibility: "hidden" }}> */}

                </div>


            </div>
        </div >
    )

}

export default Intro;