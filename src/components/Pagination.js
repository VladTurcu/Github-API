import React from 'react';

function Pagination({previousPage, nextPage, state}) {
  return (
    <nav aria-label="Page navigation example">
      {state.total && <ul className="pagination">
        {state.page > 1 && <li className="page-item"><a className="page-link" onClick={previousPage} href="#">Previous Page</a></li>}
        <li className="page-item"><a className="page-link" href="#">{state.page}</a></li>
        {state.total === 10 && <li className="page-item"><a className="page-link" onClick={nextPage} href="#">Next Page</a></li>}
      </ul>}
    </nav>
  );
}

export default Pagination;
