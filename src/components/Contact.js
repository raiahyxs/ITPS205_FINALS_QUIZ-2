import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import { useSpring, animated } from '@react-spring/web';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "rgba(35, 51, 51, 0.7)",
    color: "#fff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",  
    top: "60px",  
    width: "100vw", 
    overflow: "hidden",
    zIndex: 999, 
    backdropFilter: "blur(5px)", 
  },
  heading: {
    color: "#00FFE0",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "2rem",
    fontSize: "2rem",
    letterSpacing: "2px",
  },
  form: {
    background: "rgba(34, 34, 34, 0.85)", 
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 255, 225, 0.32)",
    width: "100%",
    maxWidth: "500px",
    position: "relative",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "#fff",
    backgroundColor: "#00ccbb",
    borderRadius: "25px",
    fontSize: "1.2rem", 
    fontWeight: "bold", 
    padding: "10px 0", 
    "&:hover": {
      backgroundColor: "#00FFE2",
    },
  },
  field: {
    margin: "1rem 0",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#00FFE0",
    },
    "& label": {
      color: "#888",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#888",
      },
      "&:hover fieldset": {
        borderColor: "#00FFE0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00FFE0",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {
      name: formValues.name === "",
      email: formValues.email === "",
      message: formValues.message === "",
    };
    setFormErrors(errors);
    const hasErrors = Object.values(errors).some((error) => error);
    if (!hasErrors) {
      console.log("Form Submitted", formValues);
    }
  };

  const formAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(-50px)" },
    config: { tension: 170, friction: 26 }, 
  });

  return (
    <Box component="div" className={classes.contactContainer}>
      <animated.div style={formAnimation}>
        <Box component="form" className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h5" className={classes.heading}>
            Contact Me
          </Typography>
          <InputField
            fullWidth
            label="Name"
            variant="outlined"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            error={formErrors.name}
            helperText={formErrors.name ? "Name is required" : ""}
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth
            label="Email"
            variant="outlined"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            error={formErrors.email}
            helperText={formErrors.email ? "Email is required" : ""}
            className={classes.field}
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth
            label="Message"
            variant="outlined"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            multiline
            rows={4}
            error={formErrors.message}
            helperText={formErrors.message ? "Message is required" : ""}
            inputProps={{ className: classes.input }}
          />
          <Button
            variant="contained"
            fullWidth
            endIcon={<Send />}
            type="submit"
            className={classes.button}
          >
            Send Message
          </Button>
        </Box>
      </animated.div>
    </Box>
  );
};

export default Contact;
