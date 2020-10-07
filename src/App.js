import React, { Component } from 'react';
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Control from './components/Control'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      selected_content_id: 1,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello React'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for information'}
      ]
    }
  }

  render() {
    var _title, _desc = null;    
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var _contents = this.state.contents;
      var _content = _contents.filter((content) => {
        return content.id === parseInt(this.state.selected_content_id);
      }).pop();
      // console.log(_content);
      _title = _content.title;
      _desc = _content.desc;
    }
    
    return (
      <div className="App">
        <Subject 
          title={ this.state.subject.title } 
          sub={ this.state.subject.sub }
          onChangeContent={function() {
            this.setState({mode: 'welcome'})
          }.bind(this)}>
        </Subject>
        <TOC data={ this.state.contents }
          onChangeContent={function(selected_content_id) {
            this.setState({
              mode: 'read', 
              selected_content_id: selected_content_id
            })
          }.bind(this)}></TOC>
        <Control onChangeMode={function(mode){
          this.setState({
            mode: mode
          });
        }.bind(this)}></Control>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}

export default App;
