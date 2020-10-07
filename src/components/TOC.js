import React, { Component } from 'react';

class TOC extends Component {
  render() {
    var data = this.props.data;
    var lists = data.map((list, i) => {
      return <li key={list.id}>
        <a href={"/content/" + i}  
          onClick={function(e) {
            e.preventDefault();
            this.props.onChangeContent(list.id);
          }.bind(this)}>
            {list.title}</a></li>;
    });
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;