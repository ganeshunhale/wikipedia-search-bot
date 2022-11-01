import * as React from "react";
import { useState, useEffect } from "react";
import Home from "./Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarcomp from "./components/Navbar";
// import Contact from "./pages/Contact";
import Invoices from "./pages/InvoiceList";
import Invoice from "./pages/Invoice";
import { Providecontext } from "./contextapi";
import ExampleDBPedia from "./components/ChatBot";
import Wikisearch from "./components/wikisearch";
import FirestoreCruds from "./components/FirestoreCruds";
import ModalOnButton from "./components/ModalOnButton";
import NestedList from "./components/Dropdown";
import CheckboxList from "./components/CheckboxListMenu";
import IndeterminateCheckbox from "./components/IndeterminateCheckbox";
import { fontStyle, fontWeight } from "@mui/system";
import CountValueHigherOrderComponent from "./CountValueHigherOrderComponent";
import SpinnerCube from "./components/cube/SpinningCube";
import About from "./components/About/index";
const Contact = React.lazy(() => import("./pages/Contact"));
function App() {
    const [isChecked, setisChecked] = useState(false);
    const [wikiVisible, setwikiVisible] = useState(false);
    const [CBExpandedProps, SetCBExpandedPropsstate] = useState({});
    const CB_WIDTH = "300px";

    const [ShowHideChatbot, setShowHideChatbot] = useState(false);
    const [hideChatbotDiv, setHideChatbotDiv] = useState(true);

    const toggleCheckedHandler = () => {
        setisChecked((state) => !state);
        // setisChecked(!isChecked)

        setwikiVisible(false);
    };
    const ShowWikiVisibleHandler = (value) => {
        setwikiVisible(
            (state) => ({ wikiVisible: value }),
            () => {
                // alert(this.state.isChecked)
            }
        );
    };


    const SetCBExpandedProps = (props) => {
        // SetCBExpandedPropsstate(state => ({ CBExpandedProps: props }), () => {
        //     // alert(this.state.isChecked)
        // })

        SetCBExpandedPropsstate(props);
    };

    const showHideChatbotHandler = (bool) => {
        setShowHideChatbot(bool);
    };

    const checkboxText = () => {


        return hideChatbotDiv ? <div
            style={{
                position: "fixed",
                bottom: "5%",
                right: "8%",
                // transform: "translateX(-50%) translateY(150%)",
                zIndex: "222",
                border: "2px solid white",
                padding: "10px 20px",
                backgroundColor: "rgb(110, 72, 170)",
                color: "white",
                fontWeight: "bolder"
            }}
        >
            Click on Chatbot➡→👉
        </div> : null

    }



    setTimeout(() => {
        setHideChatbotDiv(false)
    }, 10000)










    // <div
    //     style={{
    //         zIndex: "5",
    //         position: "absolute",
    //         float: "left",

    //         left: "0px",
    //         top: "0px",
    //         width: "20vw",
    //         backgroundColor: "red",
    //     }}
    // >
    //     click here {console.log("worker")}
    // </div>
    //         );
    // };

    return (
        <div className="App" style={{

        }} >{checkboxText()}
            <Providecontext
                value={{
                    showWiki: ShowWikiVisibleHandler,
                    CBExpandedProps: SetCBExpandedProps,
                    CB_WIDTH: CB_WIDTH,
                    showHideChatbotCB: showHideChatbotHandler,
                }}
            >
                <BrowserRouter>

                    <Navbarcomp fixed="top" />

                    <Routes>
                        {/* <Route path="/" element={}> */}
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/contact" element={<Contact />}> */}
                        <Route
                            // path="contact/*"
                            path="contact"
                            element={
                                <React.Suspense fallback={<div>...loading</div>}>
                                    <Contact />
                                </React.Suspense>
                            }
                        >
                            {/* <Route index element={<h1>index route is working</h1>} /> */}
                            {/* <Route path="linkedin" element={ href="https://www.linkedin.com/in/real-ganesh-unhale/"} /> */}
                            <Route path="featured" element={<h1>Featured</h1>} />

                            <Route path="invoices" element={<Invoices />}>
                                <Route path=":invoiceId" element={<Invoice />} />
                            </Route>
                        </Route>
                        <Route path="cube" element={< About />} />
                        <Route path="*" element={<h1>Error 404</h1>} />
                        {/* </Route> */}
                    </Routes>

                </BrowserRouter>
                {/* // <Home></Home> */}

                {ShowHideChatbot ? (
                    <div
                    // style={{
                    //     position: "relative",
                    // }}
                    >
                        {/* {checkboxText()} */}

                        <ExampleDBPedia
                            showChatBot={isChecked}
                            toggleChecked={() => {
                                toggleCheckedHandler();
                            }}
                            showWiki={ShowWikiVisibleHandler}
                        ></ExampleDBPedia>

                        {wikiVisible && <Wikisearch steps={CBExpandedProps}></Wikisearch>}
                    </div>
                ) : null}

                {/* <div>
                    chatbot on/off{" "}
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                            toggleCheckedHandler();
                        }}
                    ></input>
                </div> */}

                {/* <FirestoreCruds></FirestoreCruds>
            <ModalOnButton></ModalOnButton>
            <NestedList></NestedList>
            <CheckboxList></CheckboxList>
        <IndeterminateCheckbox></IndeterminateCheckbox> */}
            </Providecontext>
        </div>
    );
}

export default App;
