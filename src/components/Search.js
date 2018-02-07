import React from 'react';
import SearchForm from './SearchForm';
import ResultCard from './ResultCard';
import Pagination from './Pagination';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      github: [],
      username: '',
      sortDirection: 'asc',
      query: '',
      total: null,
      per_page: 10,
      page: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  callApi = async () => {
    const response = await fetch(`https://api.github.com/users/${this.state.username}/repos?page=${this.state.page}&per_page=${this.state.per_page}`);
    const res = await response.json();
    this.setState({ github: res, total: res.length });
  }


  handleSubmit(e) {
    e.preventDefault();
    return this.callApi();
  }

  handleSort = (e) => {
    const sortDirection = e.target.value;
    this.setState({ sortDirection });
  }

  handleSearch = (e) => {
    const query = e.target.value;
    this.setState({query});
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, page: 1});
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

  sortingRepos = () => {
    if(this.state.sortDirection === 'desc') {
      return this.state.github.reverse();
    }else if(this.state.sortDirection === 'asc'){
      return this.state.github.sort();
    }
  }

  render() {
    const orderedReps = this.sortingRepos();
    const { query } = this.state;
    const regex = new RegExp(query, 'i');
    const repos = orderedReps.filter((repo) => regex.test(repo.name));

    return (
      <div>
        <h1>Hello Github {this.state.github.length}</h1>
        <SearchForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleSort={this.handleSort}
          handleSearch={this.handleSearch}
          state={this.state}
        />
        <Pagination
          state={this.state}
          nextPage={this.nextPage}
          previousPage={this.previousPage}
        />
        {repos.map((repo) =>
          <div key={repo.id}>
            <ResultCard
              repo={repo}
            />
          </div>
        )}
        <Pagination
          state={this.state}
          nextPage={this.nextPage}
          previousPage={this.previousPage}
        />
      </div>
    );
  }
}

export default Search;
