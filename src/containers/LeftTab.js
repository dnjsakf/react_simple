import React, { Component } from 'react';
import { ListItem } from '../components/LeftTabComponents';

class LeftTab extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <section className="main-left">
        <span>left</span>
        <ListItem/>
      </section>
    );
  }
}

export default LeftTab;