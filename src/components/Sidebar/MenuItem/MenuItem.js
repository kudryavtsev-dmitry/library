import React from "react";

const MenuItem = ({selectedGenre, id, title, onClick, index}) => {
  return (
    <>
      <li
        className={selectedGenre === id ? "sidebar-genre--active" : ""}
        onClick={onClick}
        key={index}
      >
        {title}
      </li>
    </>
  );
};

export default MenuItem