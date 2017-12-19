import React from 'react';
import Axios from 'axios';
import SearchForm from './SearchForm';
import ResultCard from './ResultCard';
import Pagination from './Pagination';



class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      github: [],
      username: '',
      total: 0,
      per_page: 10,
      page: 1,
      filter: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  callApi = () => {
    Axios
      .get(`https://api.github.com/users/${this.state.username}/repos?page=${this.state.page}&per_page=${this.state.per_page}`)
      .then(res => this.setState({
        github: res.data,
        total: res.data.length
      }))
      .catch(err => console.log(err));
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.callApi();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value});
  }

  nextPage = () => {
    this.setState(prevState => {
      const page = prevState.page + 1;
      return {page};
    },() => this.callApi());
  }

  previousPage = () => {
    this.setState(prevState => {
      const page = prevState.page - 1;
      return {page};
    },() => this.callApi());
  }

  render() {
    console.log(this.state.github);
    return (
      <div>
        <h1>Hello Github {this.state.github.length}</h1>
        <SearchForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />

        {this.state.github.map((repo) =>
          <div key={repo.id}>
            <ResultCard
              repo={repo}
            />
          </div>
        )}
        {this.state.total === 10 &&
        <Pagination
          state={this.state}
          nextPage={this.nextPage}
          previousPage={this.previousPage}
        />}
      </div>
    );
  }
}

export default Search;
