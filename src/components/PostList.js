import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      Error: [],
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response)
        this.setState({ post: response.data })
      })
      .catch(error => {
        console.error(error)
        this.setState({ error: 'error msg to this api call' })
      }
      )
  }
  render() {
    const { post, error } = this.state
    return <div>list of post
      {
        post.length ?
          post.map(post => <div key={post.id}>{post.title}</div>) :
          null
      }
      {error ? <div>{error}</div> : null}
    </div>;
  }
}

export default PostList;
