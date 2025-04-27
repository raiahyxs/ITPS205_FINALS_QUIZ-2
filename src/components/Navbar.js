import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import School from "@material-ui/icons/School";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import avatar from "../avatar.png";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#0D0D0D",
    margin: 0,
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 2px 10px rgba(0, 255, 224, 0.3)",
  },
  menuIcon: {
    color: "#00FFE0",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "rotate(90deg)",
      color: "#ffffff",
    },
  },
  title: {
    fontWeight: 800,
    letterSpacing: "3px",
    background: "linear-gradient(45deg, #00FFE0, #00FFD5, #00B2B2)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    transition: "all 0.6s ease-in-out",
    animation: "$rotateColors 5s infinite linear",
    textShadow: "0 0 8px rgba(0, 255, 225, 0.64), 0 0 10px rgba(0, 255, 213, 0.73)",
    "&:hover": {
      transform: "scale(1.1)",
      color: "#00FFE0",
    },
  },
  "@keyframes rotateColors": {
    "0%": { color: "#00FFE0" },
    "25%": { color: "#00FFD5" },
    "50%": { color: "#00B2B2" },
    "75%": { color: "#00FFF0" },
    "100%": { color: "#00FFE0" },
  },
  menuSliderContainer: {
    width: 250,
    background: "#111",
    height: "100%",
    transition: "transform 0.3s ease-in-out",
    boxShadow: "inset 0 0 10px rgba(0, 255, 224, 0.2)",
  },
  avatar: {
    display: "block",
    margin: "1.5rem auto",
    width: theme.spacing(15),
    height: theme.spacing(15),
    borderRadius: "50%",
    boxShadow: "0 0 25px 8px #00ffe0",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      boxShadow: "0 0 40px 12px rgba(0, 255, 224, 0.9)",
      transform: "scale(1.1)",
    },
  },
  listItem: {
    color: "#00FFE0",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: "2px",
    transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
    "&:hover": {
      color: "#ffffff",
      transform: "translateX(10px)",
    },
  },
  listItemText: {
    transition: "transform 0.3s ease-in-out, letter-spacing 0.3s ease-in-out",
    "&:hover": {
      letterSpacing: "2px",
      transform: "scale(1.1)",
    },
  },
  slideIn: {
    animation: "slideIn 0.5s ease-in-out",
  },
  "@keyframes slideIn": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0)" },
  },
  desktopNav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    letterSpacing: "2px",
  },
  desktopMenu: {
    display: "flex",
    listStyle: "none",
  },
  desktopMenuItem: {
    marginLeft: theme.spacing(4),
    color: "#00FFE0",
    fontSize: "15px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "color 0.3s ease, border-bottom 0.3s ease",
    textDecoration: "none",
    position: "relative",
    "&:hover": {
      color: "#ffffff",
      letterSpacing: "2px",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "4px",
      borderRadius: "3px",
      backgroundColor: "#00FFE0",
      transform: "scaleX(0)",
      transformOrigin: "bottom right",
      transition: "transform 0.3s ease",
    },
    "&:hover::after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
  },
  active: {
    "&::after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
  },
  desktopMenuItemIcon: {
    fontSize: "5px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  cursor: {
    position: "absolute",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "3px dashed #00ffe0",
    backgroundColor: "transparent",
    boxShadow: "0 0 10px rgba(0, 255, 224, 0.8)",
    animation: "$rotateCursor 2s infinite linear, $glow 1.5s ease-in-out infinite alternate",
    pointerEvents: "none",
    zIndex: "9999",
  },
  "@keyframes rotateCursor": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  "@keyframes glow": {
    "0%": { boxShadow: "0 0 10px rgba(0, 255, 224, 0.5)" },
    "100%": { boxShadow: "0 0 20px rgba(0, 255, 224, 1)" },
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <School />, listText: "Education", listPath: "/education" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const location = useLocation();
  const classes = useStyles();

  const sideList = () => (
    <Box className={`${classes.menuSliderContainer} ${classes.slideIn}`} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Rhealyn Vasquez" />
      <Divider style={{ backgroundColor: "#00FFE0", marginBottom: "1rem" }} />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>{item.listIcon}</ListItemIcon>
            <ListItemText primary={item.listText} className={classes.listItemText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  useEffect(() => {
    const bigCursor = document.createElement("div");
    const smallCursor = document.createElement("div");
    bigCursor.classList.add(classes.cursor);
    smallCursor.style.position = "absolute";
    smallCursor.style.width = "8px";
    smallCursor.style.height = "8px";
    smallCursor.style.borderRadius = "50%";
    smallCursor.style.backgroundColor = "#00ffe0";
    smallCursor.style.boxShadow = "0 0 5px rgba(0, 255, 224, 0.8)";
    smallCursor.style.pointerEvents = "none";
    smallCursor.style.zIndex = "9999";
    document.body.appendChild(bigCursor);
    document.body.appendChild(smallCursor);
    const moveCursor = (e) => {
      const x = e.pageX;
      const y = e.pageY;
      bigCursor.style.left = `${x - bigCursor.offsetWidth / 2}px`;
      bigCursor.style.top = `${y - bigCursor.offsetHeight / 2}px`;
      smallCursor.style.left = `${x - smallCursor.offsetWidth / 2}px`;
      smallCursor.style.top = `${y - smallCursor.offsetHeight / 2}px`;
    };
    document.body.style.cursor = "none";
    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";
      bigCursor.remove();
      smallCursor.remove();
    };
  }, [classes]);

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            {isMobile ? (
              <IconButton onClick={() => setOpen(!open)}>
                {open ? <CloseIcon className={classes.menuIcon} /> : <MenuIcon className={classes.menuIcon} />}
              </IconButton>
            ) : (
              <Box className={classes.desktopNav}>
                <Typography variant="h6" className={classes.title}>Rhealyn</Typography>
                <ul className={classes.desktopMenu}>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.listPath}
                        className={`${classes.desktopMenuItem} ${location.pathname === item.listPath ? classes.active : ""}`}
                      >
                        <span className={classes.desktopMenuItemIcon}>{item.listIcon}</span>
                        {item.listText}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {isMobile && (
        <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
          {sideList()}
          <Footer />
        </Drawer>
      )}
    </React.Fragment>
  );
};

export default Navbar;
