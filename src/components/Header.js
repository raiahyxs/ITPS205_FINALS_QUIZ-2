import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

const useStyles = makeStyles((theme) => ({
  avatarWrapper: {
    position: "relative",
    width: theme.spacing(24),
    height: theme.spacing(24),
    margin: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "4px dashed #00FFE0", 
    borderRadius: "50%",
    animation: "$rotateBorder 10s linear infinite",
  },
  "@keyframes rotateBorder": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    borderRadius: "50%",
    boxShadow: "0 0 25px 10px rgba(26, 204, 195, 0.7)",
    transition: "transform 0.6s ease, box-shadow 0.6s ease",
    "&:hover": {
      boxShadow: "0 0 40px 20px rgba(35, 190, 165, 0.9)",
      transform: "scale(1.15)",
    },
  },
  title: {
    color: "#ffffff",
    fontWeight: 800,
    letterSpacing: "3px",
    marginTop: theme.spacing(2),
    textShadow: "2px 2px 4px rgba(108, 99, 255, 0.7)",
  },
  subtitle: {
    color: "#00FFE0",
    textTransform: "uppercase",
    fontWeight: 600,
    marginTop: theme.spacing(1),
    textShadow: "1px 1px 3px rgba(0, 255, 224, 0.7)",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
    padding: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <div className={classes.avatarWrapper}>
          <div className={classes.border}></div>
          <Avatar className={classes.avatar} src={avatar} alt="Rhealyn Vasquez" />
        </div>
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Rhealyn Vasquez"]} typeSpeed={40} />
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Frontend Developer", "Graphic Designer", "Web Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
