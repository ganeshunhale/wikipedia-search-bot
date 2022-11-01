import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // const [objMap, setobjMap] = useState({

    //     1:"https://images.ctfassets.net/hrltx12pl8hq/7oQKmoi04ul0JsCUxkuHih/3fbf330101cffcce262c7ab54844009d/05-nature-backgrounds_1491895829.jpg?fit=fill&w=480&h=270",
    //     2:"https://images.ctfassets.net/hrltx12pl8hq/7oQKmoi04ul0JsCUxkuHih/3fbf330101cffcce262c7ab54844009d/05-nature-backgrounds_1491895829.jpg?fit=fill&w=480&h=270",


    // });





    return (<div >
        <Carousel activeIndex={index} onSelect={handleSelect} fade>


            <Carousel.Item >
                <img
                    className="vw-100"
                    src="https://images.designtrends.com/wp-content/uploads/2015/12/11055236/Elegant-Beach-Background.jpg"
                    alt="First slide"
                    style={{ height: "60vh" }}

                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block vw-100 "
                    src="https://www.bwallpaperhd.com/wp-content/uploads/2019/07/HighVancouver.jpg"
                    alt="Second slide"
                    style={{ height: "60vh" }}

                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block vw-100 "
                    src="https://images.ctfassets.net/hrltx12pl8hq/7oQKmoi04ul0JsCUxkuHih/3fbf330101cffcce262c7ab54844009d/05-nature-backgrounds_1491895829.jpg?fit=fill&w=480&h=270"
                    alt="Third slide"
                    style={{ height: "60vh" }}

                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    {/* <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel></div >
    );
}

// render(<ControlledCarousel />);

export default ControlledCarousel;
