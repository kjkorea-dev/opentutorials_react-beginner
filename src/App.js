import React, { Component } from 'react';
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Control from './components/Control'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      mode: 'create',
      selected_content_id: 1,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello React'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for information'}
      ]
    }
    this.max_content_id = 3;
  }

  render() {
    var _title, _desc, _article = null;    
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      var _contents = this.state.contents;
      var _content = _contents.filter((content) => {
        return content.id === parseInt(this.state.selected_content_id);
      }).pop();
      // console.log(_content);
      _title = _content.title;
      _desc = _content.desc;      
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(title, desc) {
        this.max_content_id += 1;

        // Style.1 : 원본수정 - 성능저하
        // this.state.contents.push(
        //   {id: this.max_content_id, title: title, desc: desc}
        // );
        // this.setState({ contents: this.state.contents });

        // Style.2 : 복제본생성 - 성능유리 : shouldComponentUpdate 를 통해 렌더링 컨트롤이 가능
        var _contents = this.state.contents.concat(
          {id: this.max_content_id, title: title, desc: desc}
        );
        this.setState({ contents: _contents });
      }.bind(this)}></CreateContent>
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
        {_article}
      </div>
    )
  }
}

export default App;
