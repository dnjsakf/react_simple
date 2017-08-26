import React, { Component } from 'react';
import Header from './Header';
import LeftTab from './LeftTab';
import RightTab from './RightTab';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Header/>
        <LeftTab/>
        <RightTab/>
      </div>
    );
  }
}

export default App;