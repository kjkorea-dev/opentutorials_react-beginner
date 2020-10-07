import React, { Component } from 'react';

class TOC extends Component {
  // 데이터 변화없이 렌더링되는 것을 방지
  shouldComponentUpdate(newProps, newState) {
    console.log('Rendering TOC : shouldComponentUpdate');
    return this.props.data !== newProps.data;
  }

  render() {
    console.log('Rendering TOC');
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