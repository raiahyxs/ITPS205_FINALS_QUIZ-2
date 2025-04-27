import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import { motion } from "framer-motion";

import project1 from "../images/food.jpg";
import project2 from "../images/onepiece.jpg";
import project3 from "../images/portal.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "rgba(35, 51, 51, 0.7)",
    minHeight: "100vh",
    paddingTop: "4rem",
    paddingBottom: "4rem",
  },
  header: {
    textAlign: "center",
    color: "#00FFE0",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "3.1rem",
    animation: "$bouncy 1s ease-in-out",
  },
  "@keyframes bouncy": {
    "0%": {
      transform: "translateY(0)",
    },
    "20%": {
      transform: "translateY(-5px)",
    },
    "40%": {
      transform: "translateY(0)",
    },
    "60%": {
      transform: "translateY(-3px)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    background: "#2a3b47",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0, 255, 224, 0.2)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 25px rgba(0, 255, 224, 0.7), 0 0 45px rgba(0, 255, 224, 0.4)",
    },
  },
  button: {
    backgroundColor: "#00FFE0",
    color: "#000",
    fontWeight: "bold",
    borderRadius: "50px",
    padding: "4px 12px",
    fontSize: "0.9rem",
    transition: "all 0.3s ease, transform 0.2s ease",
    boxShadow: "0 4px 12px rgba(0, 255, 224, 0.3)",
    border: "2px solid transparent",
    backgroundImage: "linear-gradient(45deg, #00FFE0, #00ccbb)",
    backgroundSize: "200% auto",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 15px #00FFE0, 0 0 30px #00FFE0",
      backgroundPosition: "right center",
      borderColor: "#00FFE0",
    },
    "&:focus": {
      outline: "none",
    },
  },
  title: {
    fontWeight: 700,
    fontSize: "1.5rem",
    color: "#00FFE0",
  },
  description: {
    color: "rgba(255, 255, 255, 0.8)",
  },
}));

const projects = [
  {
    name: "Hacienda Inn",
    description: `A restaurant website focused on their signature dish, Chami, and a variety of Chinese food. Built with HTML and CSS.`,
    image: project1,
  },
  {
    name: "One Piece",
    description: `A fan page showcasing One Piece awards, story highlights, and games. Developed using HTML and CSS.`,
    image: project2,
  },
  {
    name: "Student Portal",
    description: `A platform built in Python to manage student information, assignments, and records easily.`,
    image: project3,
  },
];

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Fade in={true} timeout={1000}>
        <Typography className={classes.header}>
          Projects
        </Typography>
      </Fade>
      <Grid container justify="center" spacing={4}>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 25,
                delay: i * 0.3,
              }}
            >
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={project.name}
                    height="180"
                    image={project.image}
                    style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                  />
                  <CardContent>
                    <Typography className={classes.title} gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" className={classes.description}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" className={classes.button}>
                    Share
                  </Button>
                  <Button size="small" className={classes.button}>
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
