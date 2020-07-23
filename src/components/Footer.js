import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <BottomNavigation width="auto" style={{ background: "#222" }}>
        <BottomNavigationAction
          href="https://www.facebook.com/profile.php?id=100009545610427"
          className={classes.root}
          style={{ padding: 0 }}
          icon={<Facebook />}
        />

        <BottomNavigationAction
          href="https://www.instagram.com/sam_patel__001/"
          className={classes.root}
          style={{ padding: 0 }}
          icon={<Instagram />}
        />
        <BottomNavigationAction
          href="https://www.linkedin.com/in/sandip-bhesaniya-82ba6b148/"
          className={classes.root}
          style={{ padding: 0 }}
          icon={<LinkedIn />}
        />
      </BottomNavigation>
    </>
  );
};

export default Footer;
