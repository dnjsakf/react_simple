import React, { Component } from 'react';
import { UserInfo } from '../components/HeaderComponents';

class Header extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header className="main-header">
        <span>Header</span>
        <UserInfo/>
      </header>
    );
  }
}

export default Header;