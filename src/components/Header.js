import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Avatar, Grid, Typography } from "@material-ui/core";
import Typed from "react-typed";
import AvatarIcon from "../avatar1.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100vw",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    zIndex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={AvatarIcon}
          alt="Sandip's Portfolio"
        />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Sandip Bhesaniya"]} typeSpeed={100} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Web Developement",
            "Web Designer",
            "Full Stack Developer",
            "React Developer",
            "Mern Stack Developer",
            "Mobile App Developer",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
