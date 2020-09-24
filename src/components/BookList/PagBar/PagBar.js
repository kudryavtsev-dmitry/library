import React from "react";
import "./PagBar.css";

export const PagBar = ({ count, loadBooks, page }) => {
  const pageCount = Math.ceil(count / 10);

  const pageArr = [];

  for (let i = 1; i <= pageCount; i++) {
    pageArr.push(i);
  }

  return (
    <div className="PagBar-container">
      <ul className="PagBar-pagination-ul">
        {pageArr.map((number, index) => (
          <li
            key={index}
            className={
              number === +page
                ? "PagBar-pagination-li_active"
                : "PagBar-pagination-li"
            }
            onClick={() => loadBooks(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};
