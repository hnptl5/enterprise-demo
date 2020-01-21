import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(0),
    color: "#fff",
    fontWeight: 600,
    fontSize: "14px",
    padding: "0.5rem 1rem"
  }

}));

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

export default function CustomizedButtons({ value, OnClick, type, size }) {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" type={type} onClick={(e) => OnClick(e)} size={size} className={classes.margin}>
          {value}
        </Button>
      </ThemeProvider>
    </div>
  );
}
