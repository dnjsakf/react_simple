import React, { Component } from 'react';

const ListItem = (props)=>{
  console.log('[ListItem]',props.subject);
  return (
    <li onClick={props.onClick}>{props.subject}</li>
  );
};
export default ListItem;