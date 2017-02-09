import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * the root component
 */
class App extends Component {
  /**
   * constructor
   */
  constructor() {
    super();
    this.headlineContent = 'Init Text';
    this.state = { headlineContent: this.headlineContent };
    this.callback = this.setHeadlineContent.bind(this);
    this.reset = this.setHeadlineContent.bind(this, this.headlineContent);
  }

  /**
   * @param {string} headlineContent
   */
  setHeadlineContent(headlineContent) {
    if (headlineContent === '') {
      headlineContent = this.headlineContent;
    }

    this.setState({ headlineContent });
  }

  /**
   * render the component
   *
   * @returns {object}
   */
  render() {
    return (
      <div className="App">
        <Header />
        <AppIntro />
        <Headline text={ this.state.headlineContent } />
        <Form callback={ this.callback } reset={ this.reset } />
      </div>
    );
  }
}

const Header = () => (
  <div className="App-header">
    <img src={ logo } className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
  </div>
);

const AppIntro = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
);

const Headline = ({ text }) => <h1>{text}</h1>;
Headline.propTypes = {
  text: React.PropTypes.string
};

const Form = ({ callback, reset }) => {
  return (
    <form action="">
      <Input type="text" onChange={ callback } /><br /><br />
      <ResetButton onClick={ reset } />
    </form>
  );
};
Form.propTypes = {
  callback: React.PropTypes.func,
  reset: React.PropTypes.func
};

const Input = ({ type, onChange }) => {
  const change = ({ target }) => onChange(target.value);
  return <input type={ type } onChange={ change } />;
};
Input.propTypes = {
  type: React.PropTypes.string,
  onChange: React.PropTypes.func
};

const ResetButton = ({ onClick }) => {
  return <button onClick={ onClick }>reset</button>;
};
ResetButton.propTypes = {
  onClick: React.PropTypes.func
};

export default App;
