import React from "react";

const CountValueHigherOrderComponent = (WrappedComponent, num) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                count: 0,
            };
        }
        incrementCount = () => {
            this.setState((prevState) => {
                return { count: prevState.count + num };
            });
        };
        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props}
                ></WrappedComponent>
            );
        }
    }

    return NewComponent;
};

export default CountValueHigherOrderComponent;
