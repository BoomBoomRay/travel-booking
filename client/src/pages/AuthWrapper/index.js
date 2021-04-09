import React from "react";
import loadingGif from "../../assets/images/238.gif";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
const AuthWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <img src={loadingGif} alt="spinner" />
    </Grid>
  );
};
export default AuthWrapper;
