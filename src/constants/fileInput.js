import React from "react";
import { useField } from "formik";

export const CustomFileInput = ({ fileName, ...props }) => {
  return (
    <>
      <input {...props} type="file" />
      <label htmlFor={props.id}>Загрузить обложку</label>
    </>
  );
};
