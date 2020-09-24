import React from "react";

export const CustomFileInput = ({ fileName, ...props }) => {
  return (
    <>
      <input {...props} type="file" />
      <label htmlFor={props.id}>
        {fileName ? fileName : "Загрузить обложку"}
      </label>
    </>
  );
};
