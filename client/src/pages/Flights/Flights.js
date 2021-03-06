import React, { useState } from "react";

import clsx from "clsx";

import { Grid, Typography } from "@material-ui/core";

import FlightSearchComponent from "../../components/Flights/FlightSearch";
import FlightResults from "../../components/Flights/FlightResults";
import Scroll from "../../components/Scroll/Scroll";
import PageLoading from "../../pages/AuthWrapper";

import useStyles from "../../styles/Flights";

import backgroundImg from "../../assets/images/birdseye-beach.jpeg";

function Flights() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [data, setData] = useState();

  const handleResults = (childData) => {
    setLoading(true);
    setTimeout(() => {
      setData(childData);
      setShowResults(true);
      setLoading(false);
    }, 2000);
  };

  if (loading) {
    return <PageLoading />;
  }

  return (
    <>
      <Scroll />
      <div
        className={clsx({
          [classes.rootWithResults]: showResults,
          [classes.rootWithoutResults]: !showResults,
        })}
      >
        <Grid
          className={clsx({
            [classes.containerWithResults]: showResults,
            [classes.containerWithoutResults]: !showResults,
          })}
          container
        >
          <Grid className={classes.titleContainer} item xs={5}>
            <Typography className={classes.header}>
              Find the flights and
              <br /> start the holiday.
            </Typography>
          </Grid>
          <Grid className={classes.heroContainer} item xs={7}>
            <img
              className={classes.heroImg}
              src={backgroundImg}
              alt="birds eye beach view"
              width="100%"
            />
          </Grid>
        </Grid>
        <div className={classes.searchDiv}>
          <FlightSearchComponent submit={handleResults} />
        </div>
        {showResults && <FlightResults data={data} />}
      </div>
    </>
  );
}

export default Flights;
