import React from "react";

// import app from "./App"
import "./App.css";
import ComA from "./ComA";
import Information from "./Information";
import ClickCounter from "./ClickCounter";
import HoverMouseOver from "./HoverMouseOver";
// import CountValueHigherOrderComponent from "./CountValueHigherOrderComponent";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import FunctionalHook from "./components/FunctionalHook";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbarcomp from "./components/Navbar";
import ControlledCarousel from "./components/BootCarousel";
import ProductCard from "./components/ProductCard";
// import ExampleDBPedia from "./components/ChatBot";
// import Wikisearch from "./components/wikisearch";
// import { Providecontext } from "./contextapi";

import { Consumecontext, context } from './contextapi';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 1,

      number: 1,

      // isChecked: false,

      // wikiVisible: false,

      // CBExpandedProps: {}


    };
    // this.CB_WIDTH = "320px"
    // this.CB_WIDTH = "300px"


  }
  // componentDidMount() {
  //   setInterval(() => {
  //     console.log("RERENDERD Apppppppppppppppppppppppppppppppppppppppppppppppp");
  //     let date = new Date();
  //     let getsec = date.getSeconds();
  //     this.setState({ date: getsec });
  //   }, 100);
  // }

  // toggleCheckedHandler = () => {
  //   this.setState(state => ({ isChecked: !state.isChecked, wikiVisible: false }), () => {
  //     // alert(this.state.isChecked)
  //   })

  // }
  // ShowWikiVisibleHandler = (value) => {
  //   this.setState(state => ({ wikiVisible: value }), () => {
  //     // alert(this.state.isChecked)
  //   })

  // }

  // SetCBExpandedProps = (props) => {
  //   this.setState(state => ({ CBExpandedProps: props }), () => {
  //     // alert(this.state.isChecked)
  //   })

  // }


  static contextType = context
  componentDidMount() {
    const user = this.context

    user.showHideChatbotCB(true)


  }

  render() {
    return (
      <>
        {/* <Providecontext value={{ showWiki: this.ShowWikiVisibleHandler, CBExpandedProps: this.SetCBExpandedProps, CB_WIDTH: this.CB_WIDTH }}> */}
        {/* <Navbarcomp fixed="top" ></Navbarcomp> */}
        <ControlledCarousel></ControlledCarousel>
        <ProductCard />
        {/* <h1 className="studentName"> {this.props.Name} </h1>

        <h2>{this.state.date.toLocaleString()}</h2>
        <h1>{this.state.number}</h1>

        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });

            // this.state.number += 1
          }}
        >
          +
        </button>

        <ComA>
          <h1>childjren</h1>
        </ComA>

        <Information date={this.state.date} />

        <Information />

        <ClickCounter name="ganesh"></ClickCounter>
        <HoverMouseOver></HoverMouseOver>
        <PostList />
        <FunctionalHook></FunctionalHook>
        <PostForm></PostForm> */}
        {/* 
        {

          this.state.isChecked && ( */}

        {/* <ExampleDBPedia showChatBot={this.state.isChecked} toggleChecked={() => {

            this.toggleCheckedHandler()
          }}
            showWiki={this.ShowWikiVisibleHandler}

          >

          </ExampleDBPedia> */}
        {/* )
        } */}
        {/* <CountValueHigherOrderComponent></CountValueHigherOrderComponent> */}

        {/* {
            this.state.wikiVisible && (

              <Wikisearch steps={this.state.CBExpandedProps} ></Wikisearch>
            )

          } */}

        {/* <input type={"checkbox"} checked={this.state.isChecked} onChange={(e) => {
            this.toggleCheckedHandler()


          }}></input> */}

        {/* </Providecontext> */}
      </>
    );
  }
}

export default Home;
