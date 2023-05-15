import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchTerm } from '../store';

const CarSearch = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state, action) => {
    return state.cars;
  });

// handleSearchTermChange
  const handleSearchTerm = (e) => {
    const { value } = e.target;
    dispatch(changeSearchTerm(value));
  };
  return ( 
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input type="text" value={searchTerm} onChange={handleSearchTerm} />
      </div>
    </div>
  );
};

export default CarSearch;
