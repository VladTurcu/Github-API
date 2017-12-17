import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      github: {},
      username: 'VladTurcu',
      page: 1,
      per_page: 6
    };
  }

  componentDidMount() {
    Axios
      .get(`https://api.github.com/users/${this.state.username}/repos?page=${this.state.page}&per_page=${this.state.per_page}`)
      .then(res => this.setState({github: res.data}))
      .catch(err => console.log(err));

  }

  render() {
    console.log(this.state.github);
    return (
      <h1>Hello Github</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('github-app')
);
