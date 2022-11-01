import React, { PureComponent } from "react";

class Information extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            topic: "",
            // date: new Date(),
            date: 1,
            numb: 0,
        };
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
        });
        // alert(event.target.value)
    };
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value,
        });

        // console.log(event, event.target);
        // alert(event.target.value)
    };
    handleSubmit = (event) => {
        // this.setstate({
        //     alert: event.target.value
        // })
        alert(`${this.state.topic}${this.state.username}`);
    };
    componentDidMount() {
        setInterval(() => {
            // console.log("RERENDERD");
            let date = new Date()
            let getsec = date.getSeconds()

            this.setState({ date: getsec });
            let incnumb = this.state.numb + 1
            this.setState({ numb: incnumb })
        }, 1000);
    }



    render() {
        // console.log("RERENDER-------------------------D");

        const { username, topic } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Topic</label>
                    <select id="2" value={topic} onChange={this.handleTopicChange}>
                        <option value="I am">i am</option>
                        <option value="my name">my name</option>
                        <option value="myself">myself</option>
                    </select>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={this.handleUsernameChange}
                        />
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                </div>
                <div>
                    <h2>{this.state.date.toLocaleString()}</h2>
                    <h3>{this.state.numb}</h3>

                    {/* <h2>{this.props.date}</h2> */}

                </div>
            </form>
        );
    }
}

export default Information;
