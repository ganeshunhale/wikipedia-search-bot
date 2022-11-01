import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";


// import _ from "lodash";
function ProductCard() {


    const [scale, setscale] = useState({});
    const [scale2, setscale2] = useState({});
    const [zIndexState, setzIndexState] = useState(1)
    const [zIndexState1, setzIndexState1] = useState(1)
    return (
        <div
            className="ProdCardContainer"
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "2rem",
                // overflowX: "hidden",



            }}
        >
            <Card
                onMouseOver={() => {
                    setscale({ backgroundColor: "grey", transform: "scale(1.1)" });
                    setzIndexState(6)
                }}
                onMouseOut={() => {
                    setscale({});
                    setzIndexState(1)
                }}
                style={Object.assign(
                    { width: "30rem", zIndex: zIndexState, transition: "800ms", overflowX: "visible" },
                    scale
                )}
            >
                {/* <Card  style={{ width: '30rem', ...scale, transform: "scale(1.2)", zIndex: 1 }}> */}
                {/* <Card style={{ width: '30rem' }}> */}

                <Card.Img
                    variant="top"
                    src="https://vitalcute.com/wp-content/uploads/Orange-Flowers-1.jpg"
                />
                <Card.Body>
                    <Card.Title>sunfloor</Card.Title>
                    <Card.Text>card's content.</Card.Text>
                    <div
                        style={{
                            display: "flex",
                            // backgroundColor: "yellow",
                            justifyContent: "center",
                            position: "sticky",
                            top: "0",
                            alignItems: "flex-start"

                        }}
                    ><Button
                    // variant="light" style={{ justifySelf: "flex-end", backgroundColor: "blue" }}
                    >Details</Button></div>
                </Card.Body>
            </Card>
            <Card onMouseOver={() => {
                setzIndexState1(5)
                setscale2({ backgroundColor: "grey", transform: "scale(1.1)" });
                console.log("onMouseOver({ zIndex: 5 })", zIndexState);
            }}
                onMouseOut={() => {
                    setzIndexState1(1)
                    setscale2({});
                    console.log("onMouseOut({ zIndex: 1 })", zIndexState);
                }}
                style={Object.assign(
                    { width: "30rem", zIndex: zIndexState1, transition: "800ms" },
                    scale2
                )}>
                <Card.Img
                    variant="top"
                    src="https://vitalcute.com/wp-content/uploads/Orange-Flowers-1.jpg"
                />
                <Card.Body>
                    <Card.Title>sunfloor 2</Card.Title>
                    <Card.Text>card's content.</Card.Text>

                    <div
                        style={{
                            display: "flex",
                            // backgroundColor: "yellow",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                        // variant="light"
                        // style={{ justifySelf: "flex-end", backgroundColor: "blue" }}
                        >
                            Details
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;


 // let a = "str1"
    // let b = a

    // b = "st2"
    // console.log(a);

    // let obj = { x: 1, y: 2, objInner: { a: 4, b: 5 } }

    // // let obj2 = Object.assign({}, obj)

    // // let obj2 = { ...obj }
    // let obj2 = _.cloneDeep(obj)

    // // obj2.y = 5
    // obj2.objInner.a = 3

    // console.log(obj, obj2);

    // let arr1 = [1, 2, 3]
    // let arr2 = [4, 5, 6]

    // // let arr3 = arr1.concat(arr2)
    // let arr3 = [...arr1, ...arr2]

    // let isArr = Array.isArray(arr3)

    // let newarr = ["1, 2, 3, 4"]
    // let newarr = Array.from("1, 2, 3, 4")

    // let str = "1.21,2,3,4"

    // let newarr2 = str.split(",").map((item) => parseFloat(item))

    // console.log(arr3, isArr, newarr2);

    // let flot = 2.00842033403247

    // console.log(parseFloat(flot), flot.toFixed(2));