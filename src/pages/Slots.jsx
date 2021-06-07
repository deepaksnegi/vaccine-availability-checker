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
import axios from "axios";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React, { useEffect, useState } from "react";
import Chips from "../components/Chips";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "16px 0",
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

const filters = [
  { key: 0, label: "Age 18+" },
  { key: 1, label: "Age 45+" },
  { key: 2, label: "Free" },
];

const Slots = () => {
  const [slots, setSlots] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=704&date=10-05-2021`
      )
      .then((response) => setSlots(response.data.sessions));
  }, []);
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
