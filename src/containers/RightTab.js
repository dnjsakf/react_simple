import React, { Component } from 'react';
import { ViewerTitle } from '../components/RightTabComponents';

class RightTab extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <section className="main-right">
        <span>rightTab</span>
        <ViewerTitle/>
      </section>
    );
  }
}

export default RightTab;