import React from 'react';

function ResultCard({repo}) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-header card-title"><img className="img-thumbnail" src={repo.owner.avatar_url}/> <a target="blank" href={repo.homepage}>{repo.name}</a></h4>
        <h6 className="card-subtitle mb-2 text-muted">Author: {repo.owner.login}</h6>
        <p className="card-text">{repo.created_at.split('T').join(' Time: ')}</p>
        <p className="card-text">{repo.description}</p>
        <a target="blank" className="card-link" href={repo.homepage}>Check on Github</a>
      </div>
    </div>
  );
}

export default ResultCard;
