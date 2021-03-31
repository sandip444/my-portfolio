import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@material-ui/core";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/react-node.jpg";
import project3 from "../images/reactjs1.png";
import project4 from "../images/react-native-fire.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem  auto",
  },
});

const Projects = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />

      <Grid container justify="center">
        {/* project 1 */}

        <Grid item xs={12} md={6} sm={8}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={project1}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  AnayaExport
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This project is based on E-commerce type of import export
                  Website
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://anayaexport.com/"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* project 2 */}
        <Grid item xs={12} md={6} sm={8}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 2"
                height="140"
                image={project2}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  e-Commerce
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This project is e-commerce template in that you can manually
                  set your Product,Categories and receive product.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://admin-ecommerce.herokuapp.com/login"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project 3 */}

        <Grid item xs={12} md={6} sm={8}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 3"
                height="140"
                image={project3}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Portfolio
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This project is my portfolio website
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://sandiportfolio.herokuapp.com/"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* project 4 */}
        <Grid item xs={12} md={6} sm={8}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 4"
                height="140"
                image={project4}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Meet-Up App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  In this App you can meet unknown person based on you common
                  interest and chat with him.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://bit.ly/2AR89U3"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
