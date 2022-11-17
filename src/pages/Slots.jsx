import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5% 0",
    textAlign: "center",
    padding: theme.spacing(2),
    backgroundColor: "#F6F7F8",
  },
  card: {
    borderBottom: "2px solid green",
    height: "100%",
  },
  favorite: {
    margin: "auto",
  },
}));

const Slots = ({ slots }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Grid container spacing={2} justify="center">
        {slots.map((s) => (
          <Grid item xs={12} sm={3} key={s.name}>
            <Card className={classes.card}>
              <CardContent>
                <CardHeader title={s.name} subheader={s.address} />
                <Typography variant="body1">Date: {s.date}</Typography>
                <Typography variant="body1">
                  Time: {s.from} - {s.to}
                </Typography>
                <Typography variant="body2">Vaccine: {s.vaccine}</Typography>
                <Typography variant="body2">Cost: {s.fee_type}</Typography>
                <Typography variant="body2">
                  Minimum Age: {s.min_age_limit}
                </Typography>
                <Typography variant="body2">
                  Available Vaccines: {s.available_capacity}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton className={classes.favorite}>
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Slots;
