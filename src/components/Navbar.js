import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Divider,
  List,
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  Menu,
  Home,
  Apps,
  ContactMail,
  AssignmentInd,
} from "@material-ui/icons";
import avatar from "../avatar2.png";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    backgroundColor: "#521",
    width: 250,
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  listitem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Projects",
    listPath: "/projects",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
];

const Navbar = () => {
  const [state, setstate] = useState({
    right: false,
  });
  const toggleSlider = (slider, open) => () => {
    setstate({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideList = (slider) => {
    return (
      <Box
        className={classes.menuSliderContainer}
        component="div"
        onClick={toggleSlider(slider, false)}
      >
        <Avatar className={classes.avatar} src={avatar} alt="sam" />
        <Divider />
        <List>
          {menuItems.map((IsItem, key) => (
            <ListItem button key={key} component={Link} to={IsItem.listPath}>
              <ListItemIcon className={classes.listitem}>
                {IsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listitem}
                primary={IsItem.listText}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Menu style={{ color: "tomato" }} />
            </IconButton>
            <Typography
              variant="h5"
              style={{ color: "tan", textDecoration: "none" }}
              component={Link}
              to={"/"}
            >
              Sandip's Portfolio
            </Typography>
            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
