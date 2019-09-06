import React, { Component } from "react";
import styled from 'styled-components';

const Wrapper= styled.div`
  input{
    display:block;
    width:180px;
    padding:5px;
    margin:0 auto;
    background-color:#01579b;
    color:#eee;
  }
  input::placeholder {
  color: #eee;
  opacity: 1;
  }
  button{
    padding:10px;
    background:#c62828;
    color:#eee;
    margin-top:20px;
  }
`

export class Form extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleClick = () => {
    console.log(this.state.value);
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <Wrapper>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Enter your appointment..."
        />
        <button onClick={this.handleClick}>Make Appointment</button>
      </Wrapper>
    );
  }
}

export default Form;
