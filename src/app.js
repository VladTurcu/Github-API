import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      github: {}
    };
  }

  render() {
    return (
      <h1>Hello Github</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('github-app')
);
