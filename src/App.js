import React, { Component } from 'react';

import './App.css';
import MainPage from './components/MainPage/MainPage'
import JournalPage from './components/JournalPage/JournalPage'
import ResumePage from './components/ResumePage/ResumePage'

class App extends Component {
state = {
  journalPageVisible: false,
  resumePageVisible: false,
}

handleClickJournal = () => {
  this.setState({
    journalPageVisible: !this.state.journalPageVisible,
  }) 
}

handleClickResume = () => {
  this.setState({
    resumePageVisible: !this.state.resumePageVisible,
  }) 
}

  render() {
    return (
      <div className="app">
        
          <JournalPage 
          onClick={this.handleClickJournal}
          visibilityLP={this.state.journalPageVisible} />
          <MainPage />
          <ResumePage 
          onClick={this.handleClickResume}
          visibilityRP={this.state.resumePageVisible}/>
        
      </div>
    );
  }
}

export default App;
