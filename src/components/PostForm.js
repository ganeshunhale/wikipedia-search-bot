import React, { useState } from "react";


function PostForm
    () {




    // class PostForm extends PureComponent {
    //     constructor(props) {
    //         super(props);

    //         this.state = {
    //             userid: "",
    //             title: "",
    //             body: "",
    //         };

    //         // this.changeHandler2=this.changeHandler2.bind(this)
    //     }
    const [stateA, setStateA] = useState({ userid: "", title: "", body: "" })
    // const [title, settitle] = useState("")
    // const [body, setbody] = useState("")
    const updateState = (data) => setStateA((state) => ({ ...state, ...data }));


    const changeHandler = (e) => {
        updateState({ [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
    };
    console.log("stateA.......", stateA);

    // const { userid, title, body } = this.state;
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input
                        type={"text"}
                        name="userid"
                        value={stateA.userid}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <input
                        type={"text"}
                        name="title"
                        value={stateA.title}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <input
                        type={"text"}
                        name="body"
                        value={stateA.body}
                        onChange={changeHandler}
                    />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );

}

export default PostForm;
