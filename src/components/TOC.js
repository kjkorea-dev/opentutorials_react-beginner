import React, { Component } from 'react';

class TOC extends Component {
  render() {
    var data = this.props.data;
    var lists = data.map((list, i) => {
      return <li key={i}><a href={"/content/" + i}>{list.title}</a></li>;
    });
    return (
      <nav>
          {lists}
      </nav>
    );
  }
}

export default TOC;