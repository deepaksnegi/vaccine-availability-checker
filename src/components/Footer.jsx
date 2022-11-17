import { Card, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    minWidth: "100%"
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Typography>
        Thanks to
        <Link href="https://storyset.com/coronavirus"> Freepik Storyset </Link>
        for Illustration
      </Typography>
    </Card>
  );
};

export default Footer;
