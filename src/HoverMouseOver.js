import React, { Component } from 'react'
import CountValueHigherOrderComponent from "./CountValueHigherOrderComponent";

class HoverMouseOver extends Component {



    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>HoverMouseOver{count}times</h2>
            </div>
        )
    }
}

export default CountValueHigherOrderComponent(HoverMouseOver, 10)
