import React, { Component } from 'react';

class GoalItem extends Component{
  render(){
    console.log('this.props.goal', this.props.goal);
    const { email, title } = this.props.goal;
    return(
      <div>
        <strong>{title}</strong>
        <span> submitted by {email}</span>
      </div>
    )
  }
}

export default GoalItem;
