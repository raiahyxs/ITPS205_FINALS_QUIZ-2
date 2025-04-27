import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "rgba(35, 51, 51, 0.7)",
    padding: "2rem 0",
    minHeight: "100vh",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #00FFE0",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1.5rem",
    borderBottom: "2px solid #00FFE0",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    background: "#333",
    borderRadius: "8px",
    transition: "transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out, background-color 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 6px 12px rgba(0, 255, 224, 0.7)",
      backgroundColor: "#2c2c2c",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#00FFE0 transparent transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #00FFE0 transparent",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#00FFE0",
    background: "#333",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    boxShadow: "0 4px 10px rgba(0, 255, 224, 0.7)",
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
    "&:hover": {
      background: "#00FFE0",
      color: "#000",
      transform: "scale(1.1)",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
    },
  },
  heading: {
    color: "#00FFE0",
    padding: "3rem 0",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "2.5rem",
    letterSpacing: "1px",
    fontWeight: "bold",
    animation: "$fadeIn 1s ease-in-out",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
    fontSize: "1.5rem",
    letterSpacing: "1px",
    fontWeight: "bold",
  },
  body1: {
    color: "#00FFE0",
    fontSize: "1.1rem",
    fontWeight: "500",
    margin: "10px 0",
  },
  subtitle1: {
    color: "#ddd",
    fontSize: "1rem",
    lineHeight: "1.5",
    marginBottom: "1rem",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(-30px)",
    },
    "50%": {
      opacity: 0.5,
      transform: "translateY(10px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const Education = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Education
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Fade in={true} timeout={1000}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2010 - 2017
          </Typography>
        </Fade>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" align="center" className={classes.subHeading}>
            Primary School
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Completed my Primary School education at Lucena East III Elementary School.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Focused on foundational subjects like Math, English, and Science.
          </Typography>
        </Box>

        <Fade in={true} timeout={1200}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2021 - 2023
          </Typography>
        </Fade>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" align="center" className={classes.subHeading}>
            Secondary School
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Completed my Secondary School education at CSTC Lucena.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Specialized in Mathematics, Physics, and Chemistry.
          </Typography>
        </Box>

        <Fade in={true} timeout={1400}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2023 - Present
          </Typography>
        </Fade>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" align="center" className={classes.subHeading}>
            Bachelor's in Information Technology
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Currently pursuing a Bachelor's in Information Technology at DLL.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Focused on algorithms, data structures and AI.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
