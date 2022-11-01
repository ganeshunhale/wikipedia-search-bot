import React, { Component } from "react";
import CountValueHigherOrderComponent from "./CountValueHigherOrderComponent";
class ClickCounter extends Component {

    render() {
        const { count, incrementCount, name } = this.props;
        return <button onClick={incrementCount}>{name} clicked {count} times</button>;
    }
}

export default CountValueHigherOrderComponent(ClickCounter, 2);
