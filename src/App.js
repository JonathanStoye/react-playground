import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { headlineContent: 'Init Text' }
  }

  setHeadlineContent(headlineContent) {
    this.setState({
      headlineContent: headlineContent
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AppIntro />

        <Headline text={ this.state.headlineContent }/>
        <Form callback={ this.setHeadlineContent.bind(this) }/>
      </div>
    );
  }
}

const Header = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
  </div>
)

const AppIntro = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
)

const Headline = ({ text }) => <h1>{ text }</h1>

const Form = ({ callback }) => {
  const logMe = ({ target }) => callback(target.value)

  return (
    <form>
      <Input type='text' onChange={ logMe } />  
    </form>
  )
}

const Input = ({ type, onChange }) => {
  return <input type={ type } onChange={ onChange }/>
}

export default App;
