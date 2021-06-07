import {
  Avatar,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PlaceIcon from "@material-ui/icons/Place";
import React from "react";
import profile from "../images/profileBackground.svg";
import profileImage from "../images/userProfile.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${profile})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  },
  profileDetails: {
    textAlign: "center",
  },
}));

const UserProfile = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Avatar
        src={profileImage}
        alt="vaccine"
        className={classes.profileImage}
      />
      <CardContent className={classes.profileDetails}>
        <Typography variant="h5">{user.name}</Typography>
        <Typography variant="body1">
          <PlaceIcon fontSize="small" /> {`${user.district}, ${user.state}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
