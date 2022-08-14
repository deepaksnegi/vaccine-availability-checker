import { TextField } from "@material-ui/core";
import React from "react";

const Input = ({ label, name, errorMessage, onChangeHandler, value }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      name={name}
      onChange={onChangeHandler}
      value={value}
      {...(errorMessage && { error: true, helperText: errorMessage })}
    />
  );
};

export default Input;
