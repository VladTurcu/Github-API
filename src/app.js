import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Search/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('github-app')
);
