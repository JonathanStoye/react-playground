import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.headlineContent = 'Init Text'
    this.state = { headlineContent: this.headlineContent }
  }

  setHeadlineContent(headlineContent) {
    if (headlineContent === '')
      headlineContent = <br />
    this.setState({ headlineContent: headlineContent })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AppIntro />

        <Headline text={ this.state.headlineContent }/>
        <Form callback={ this.setHeadlineContent.bind(this) } reset={ this.setHeadlineContent.bind(this, this.headlineContent) }/>
      </div>
    );
  }
}

const Header = () => (
  <div className="App-header">
    <img src={ logo } className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
  </div>
)

const AppIntro = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
)

const Headline = ({ text }) => <h1>{ text }</h1>

const Form = ({ callback, reset }) => {
  return (
    <form>
      <Input type='text' onChange={ callback } /><br /><br />
      <ResetButton onClick={ reset } />
    </form>
  )
}

const Input = ({ type, onChange }) => {
  const change = ({ target }) => onChange(target.value)
  return <input type={ type } onChange={ change }/>
}

const ResetButton = ({ onClick }) => {
  return <button onClick={ onClick }>reset</button>
}

export default App;
