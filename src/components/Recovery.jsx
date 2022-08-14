import { CardContent, makeStyles, Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import React from "react";
import mask from "../images/face-mask.svg";

const useStyles = makeStyles((theme) => ({
  recovery: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  maskImage: {
    width: "100px",
    height: "100px",
  },
}));

const Recovery = ({ recoveryRate }) => {
  const classes = useStyles();
  return (
    <Card className={classes.recovery}>
      <img src={mask} alt="vaccine" className={classes.maskImage} />
      <CardContent>
        <Typography>Recovery rate: {recoveryRate}%</Typography>
      </CardContent>
    </Card>
  );
};

export default Recovery;
