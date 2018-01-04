import React from 'react';

function SearchForm({handleSubmit, handleChange, handleSort, handleSearch, state}) {

  return (
    <form className="row" onSubmit={handleSubmit}>
      <div className="col col-6">
        <div className="form-group">
          <label>Username/Organisation</label>
          <input type="text" className="form-control" name="username" value={state.username} onChange={handleChange} placeholder="Search for..." aria-label="Search for..." />
        </div>
      </div>

      <div className="col col-6">
        <div className="form-group">
          <label>Sort by date</label>
          <select id="inputState" onChange={handleSort} className="form-control">
            <option value="asc">Last added</option>
            <option value="desc">First added</option>
          </select>
        </div>

        <div className="form-group">
          <label>Search by repository name</label>
          <input className="form-control" type="text" onChange={handleSearch} placeholder="Search Repository by name" />
        </div>
      </div>
      <button className="btn btn-success btn-block" >Go!</button>
    </form>
  );
}

export default SearchForm;
