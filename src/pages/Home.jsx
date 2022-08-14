import {
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import controlInputs from "../components/inputs";
import UserProfile from "../components/UserProfile";
import VaccinationForm from "../components/VaccinationForm";
import Recovery from "../components/Recovery";
import vaccine from "../images/Vaccine-bro.svg";
import wave from "../images/wave.svg";
import working from "../images/Working.svg";
import { getCovidDetail } from "../services/covid/covidReportService";

const useStyles = makeStyles((theme) => ({
  vaccinationContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  vaccinationCard: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 20px 0 20px",
    backgroundImage: `url(${wave})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  vaccinationContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  vaccinationImage: {
    width: "150px",
    height: "150px",
  },
  notifications: {
    marginTop: theme.spacing(2),
  },
  working: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
  },
}));

const Home = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user.user);
  const [recoveryRate, setRecoveryRate] = useState();

  useEffect(() => {
    getCovidDetail().then((d) => {
      const { confirmed, recovered } = d;
      const recoveryRate = (recovered / confirmed) * 100;
      setRecoveryRate(recoveryRate.toFixed(2));
    });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        {user.name ? <UserProfile user={user} /> : <VaccinationForm />}
      </Grid>
      <Grid item sm={8} className={classes.vaccinationContainer}>
        <Card className={classes.vaccinationCard}>
          <CardContent className={classes.vaccinationContent}>
            <Typography>
              Everyone 18 and older is eligible to get the vaccine against
              Covid-19. Availability may vary by state.
            </Typography>
            <CardActions>
              <controlInputs.Button
                variant="contained"
                color="primary"
                text="Find Your Slot"
              />
            </CardActions>
          </CardContent>
          <img
            src={vaccine}
            alt="vaccine"
            className={classes.vaccinationImage}
          />
        </Card>
        <Grid container spacing={2} className={classes.notifications}>
          <Grid item sm={8}>
            <Card className={classes.working}>
              <img
                src={working}
                alt="vaccine"
                className={classes.vaccinationImage}
              />
              <Typography variant="body1">
                You take care of your mental health, we are working on your
                behalf here.
              </Typography>
            </Card>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Recovery recoveryRate={recoveryRate} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
