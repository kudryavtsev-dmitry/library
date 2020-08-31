import React from "react";
import "./SearchInput.css";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { filterBook } from "../../../redux/books/actions";

const SearchInput = () => {
  const dispatch = useDispatch();

  const delayedQuery = _.debounce((value) => dispatch(filterBook(value)), 500);

  const onChange = (e) => {
    delayedQuery(e.target.value);
  };

  return (
    <div className='header-search'>
      <div className='header-icon'>
        <i className='fa fa-search' aria-hidden='true'></i>
      </div>
      <input onChange={onChange} className='header-input' type='text' />
    </div>
  );
};

export default SearchInput;
