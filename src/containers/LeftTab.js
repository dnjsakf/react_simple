import React, { Component } from 'react';
import { ListItem } from '../components/LeftTabComponents';
import { getQuestion } from '../services/database';

// database에서 questions title만 가져와서,
// ListItem에 넣어주자.

class LeftTab extends Component{
  constructor(props){
    super(props);
    this.state = {
      isFetch: false,
      subject: []
    }
  }
  
  // 문제 목록 가져오기
  getQuestionList(){
    this.setState({
      isFetch: true,
    })
    const questions = getQuestion('questions');

    questions.then((response)=>{
      this.setState({
        isFetch: false,
        subject: response.data.data
      })
    }).catch((error)=>{
      this.setState({
        isFetch: false,
      })
    });
  }

  // 버튼 클릭 이벤트
  handleOnClick(test){
    alert(test);
  }
  
  // 
  render(){
    const data = this.state.subject;
    let item = [];
    for(let key in data){
      item.push(
        <ListItem 
          key={ data[key].no } 
          onClick={ ()=>{this.handleOnClick(data[key].no)} } 
          subject={ data[key].subject }
        />
      );
    }

    return (
      <section className="main-left">
        <ul className="main-left-question-lsit">
          { item }
        </ul>
      </section>
    );
  }
  
  // rendering 되기 전에 실행
  componentDidMount(){
    this.getQuestionList();
  }
}

export default LeftTab;
