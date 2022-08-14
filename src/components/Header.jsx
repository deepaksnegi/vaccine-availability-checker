import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    transform: "translate(0)",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" color="secondary">
          Vaccine Availability Notifier
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
