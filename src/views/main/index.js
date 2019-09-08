import React, { Component } from 'react';
import {
  Container,
  InputContainerHelpInfo,
  Input,
  InputContainer,
  TextContainer,
  TextResultInfo,
  TextResult
} from './styles';

class Main extends Component {
  state = {
    input: '',
    chicken: '',
    invisibleValue: ''
  };

  render() {
    return (
      <Container>
        <InputContainerHelpInfo>
          <InputContainer>
            <h1>
              <span role="img" aria-label="Pointing Down">
                👇
              </span>{' '}
              Type here{' '}
              <span role="img" aria-label="Pointing Down">
                👇
              </span>
            </h1>
            <Input
              type="text"
              value={this.state.input}
              onChange={e =>
                this.setState({
                  input: e.target.value,
                  chicken: '🐔'.repeat(this.state.input.length)
                })
              }
            />
          </InputContainer>
        </InputContainerHelpInfo>
        <TextContainer>
          <TextResultInfo>
            <h2>
              Result in chicken-language{' '}
              <span role="img" aria-label="Pointing Right">
                👉
              </span>
            </h2>
          </TextResultInfo>
          <TextResult>
            <h2> {this.state.chicken}</h2>
          </TextResult>
        </TextContainer>
      </Container>
    );
  }
}

export default Main;
