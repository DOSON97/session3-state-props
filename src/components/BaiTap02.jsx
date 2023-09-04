import React, { Component } from 'react'

export default class State extends Component {
  constructor(props){
    super(props);
    this.state={
      inputValue : " ",
    }
  }
  renderMessage = () => {
    
  }
  handleChangeInput = (e) => {
    this.setState(
      {
        inputValue: e.target.value
      }
    )
  }
  handleClick= () => {

    
  }
 
  render() {
    let Arr2 ;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>nhập dữ liệu vào </label>
          <input type='name'  value={this.state.inputValue} onChange={this.handleChangeInput}  />
          <button onClick={this.handleClick} >Clicck!!!</button>
        </form>
        <p id='son-son'>{this.state.inputValue}</p>
       
      </div>
    )
  }
}

