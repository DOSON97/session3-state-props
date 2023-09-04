import React, { Component } from 'react'

export default class BaitTap extends Component {
    constructor(){
        super();
        this.state = {
            Text : "This is firts text",
        }
    };
    handleChangeText = () => {
        this.setState({Text: !this.state.Text});
    };
  render() {
    return (
      <div>
        <h2>Bai tap 1</h2>
        <p>Text:{this.state.Text}</p>
        {this.state.Text?(
            <div>
                <h2>this is a first text</h2>
                <button style={{width:"50px",height:"50px",}} onClick={this.handleChangeText}>Click</button>
            </div>
        ) : (
            <div>
                <h2>is not first text</h2>
                <button style={{width:"50px",height:"50px",color:"red"}} onClick={this.handleChangeText}>Click</button>
            </div>
        )
        }
      </div>
    )
  }
}
