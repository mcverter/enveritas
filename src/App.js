import React, { Component } from 'react';
import './App.css';
import QuestionListContainer from './containers/QuestionListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuestionListContainer
          questionHeight={50}
          questionWidth={500}
          questionMargin={10}
          questionBorder={1}
          questionPadding={10}
        />
      </div>
    );
  }
}

export default App;
