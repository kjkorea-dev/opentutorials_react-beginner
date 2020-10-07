import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
          <h2>Create</h2>
          <form action="/create_process" method="post" onSubmit={function(e){
            e.preventDefault();
            // const data = new FormData(e.target);
            // console.log(data.get('title'), data.get('desc'));
            this.props.onSubmit(
              e.target.title.value, 
              e.target.desc.value);
          }.bind(this)}>
            <p>
              <input type="text" name="title" placeholder="Title" />
            </p>
            <p>
              <textarea name="desc" placeholder="Description"></textarea>
            </p>
            <p>
              <input type="submit" value="Create"/>
            </p>
          </form>
      </article>
    );
  }
}

export default CreateContent;