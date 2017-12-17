import React from 'react';

function SearchForm({handleSubmit, handleChange, state}) {

  return (


    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" className="form-control" name="username" value={state.username} onChange={handleChange} placeholder="Search for..." aria-label="Search for..." />
          <span className="input-group-btn">
            <button className="btn btn-success" >Go!</button>
          </span>
        </div>
      </form>

    </div>
  );
}

export default SearchForm;
