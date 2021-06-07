import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  label: {
    textTransform: "none",
  },
}));
const CustomButton = ({
  text,
  variant,
  color,
  size,
  onClickHandler,
  ...other
}) => {
  const classes = useStyles();

  return (
    <Button
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "large"}
      onClick={onClickHandler}
      classes={{ root: classes.root, label: classes.label }}
      {...other}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
