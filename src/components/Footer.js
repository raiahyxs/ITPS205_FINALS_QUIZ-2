import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    height: "60px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease-in-out",
    borderTop: "1px solid #00FFE0", 
  },
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      padding: "0 12px",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "2rem",
      transition: "all 0.3s ease-in-out",
    },
  },
  github: {
    color: "#ffffff",
    "&:hover": {
      color: "#00FFE0",
      transform: "scale(1.3)",
      transition: "all 0.3s ease-in-out",
    },
  },
  facebook: {
    color: "#1877F2",
    "&:hover": {
      color: "#00FFE0",
      transform: "scale(1.3)",
      transition: "all 0.3s ease-in-out",
    },
  },
  instagram: {
    color: "#E1306C",
    "&:hover": {
      color: "#00FFE0",
      transform: "scale(1.3)",
      transition: "all 0.3s ease-in-out",
    },
  },
  footerGlow: {
    "&:hover": {
      background: "#333",
      boxShadow: "0 0 20px rgba(0, 255, 224, 0.7)",
      transition: "all 0.3s ease-in-out",
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <BottomNavigation className={`${classes.bottomNavContainer} ${classes.footerGlow}`}>
      <BottomNavigationAction
        icon={<FacebookIcon />}
        className={`${classes.root} ${classes.facebook}`}
        onClick={() => handleClick("https://www.facebook.com/raiayxs/")}
      />
      <BottomNavigationAction
        icon={<GitHubIcon />}
        className={`${classes.root} ${classes.github}`}
        onClick={() => handleClick("https://github.com/raiahyxs")}
      />
      <BottomNavigationAction
        icon={<InstagramIcon />}
        className={`${classes.root} ${classes.instagram}`}
        onClick={() => handleClick("https://www.instagram.com/raiayxs/")}
      />
    </BottomNavigation>
  );
};

export default Footer;
