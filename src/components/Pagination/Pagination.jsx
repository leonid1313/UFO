import React from 'react';
import './Pagination.scss'
import Button from 'react-bootstrap/Button';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <Button className="button-pagination" onClick={() => paginate(number)} variant="primary">{number}</Button>{' '}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;