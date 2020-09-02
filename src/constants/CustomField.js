import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";

export const CustomField = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      helperText={meta.touched && meta.error}
      error={meta.touched && meta.error}
      {...field}
      {...props}
    />
  );
};
