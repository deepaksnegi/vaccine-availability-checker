import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export const useForm = (initialValues, validateOnChange) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    validateOnChange?.();

    setValues({
      ...values,
      [name]: value,
    });
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return [values, setValues, onChangeHandler, errors, setErrors, reset];
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export const Form = (props) => {
  const { children, ...other } = props;
  const classes = useStyles();
  return (
    <form className={classes.root} {...other} autoComplete="off">
      {children}
    </form>
  );
};
