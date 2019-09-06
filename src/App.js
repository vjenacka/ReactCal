import React from "react";
import Form from "./components/Form";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  text-align: center;
  color: #01579b;
  h1 {
    padding: 20px 0;
  }
  h3{
    padding-bottom: 15px;
  }
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>React Calendar</h1>
        <h3>Appointments</h3>
        <Form />
      </Wrapper>
    );
  }
}

export default App;
