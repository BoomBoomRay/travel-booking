import React, { useState, useEffect } from "react";

import clsx from "clsx";

import { useHistory } from "react-router-dom";

import { useStateContext } from "../../context/context";

import { Container, Button, Typography } from "@material-ui/core";

import TripAccordion from "../../components/Itinerary/TripAccordion";
import Scroll from "../../components/Scroll/Scroll";

import useStyles from "../../styles/Itinerary/Itinerary";

const Itinerary = () => {
  const classes = useStyles();

  const { user } = useStateContext();
  const history = useHistory();

  const [upcoming, setUpcoming] = useState([]);
  // const [past, setPast] = useState([]);
  const [upcomingFilter, setUpcomingFilter] = useState(true);
  const [pastFilter, setPastFilter] = useState(false);

  const handleUpcomingFilter = () => {
    setUpcomingFilter(true);
    setPastFilter(false);
  };

  const handlePastFilter = () => {
    setPastFilter(true);
    setUpcomingFilter(false);
  };

  // const today = new Date();

  const toDateObject = (date) => {
    return new Date(`${date}T23:59`);
  };

  // const isUpcoming = (trip) => {
  //   const departureDate = toDateObject(trip.flight.OutboundLeg.DepartureDate);
  //   if (departureDate >= today) {
  //     return trip;
  //   }
  // };

  // const isPast = (trip) => {
  //   const departureDate = toDateObject(trip.flight.OutboundLeg.DepartureDate);
  //   if (departureDate < today) {
  //     return trip;
  //   }
  // };

  const sortTrips = (trips) => {
    return trips.sort(
      (a, b) =>
        toDateObject(b.flight.OutboundLeg.DepartureDate) -
        toDateObject(a.flight.OutboundLeg.DepartureDate),
    );
  };

  const handleRedirect = () => history.replace("/flights");

  const getTrips = async () => {
    try {
      const response = await fetch(`/api/itinerary/itinerary/${user._id}`, {
        method: "GET",
      });
      const data = await response.json();

      if (data.status === "Success") {
        const newTrips = data.data.filter(
          ({ date }) => new Date(date).getTime() >= Date.now(),
        );
        // const oldTrips = data.data.filter(
        //   ({ date }) => new Date(date).getTime() <= Date.now(),
        // );
        // const pastTrips = data.filter(oldTrips);
        // const upcomingTrips = data.filter(newTrips);
        // setPast(sortTrips(oldTrips));
        setUpcoming(sortTrips(newTrips));
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getTrips();
    // eslint-disable-next-line
  }, []);
  console.log(upcoming);
  return (
    <div>
      <Scroll />
      <Container className={classes.tripHistoryContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpcomingFilter}
          className={clsx({
            [classes.inactiveBtn]: pastFilter,
            [classes.activeBtn]: upcomingFilter,
          })}
        >
          Upcoming
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePastFilter}
          className={clsx({
            [classes.inactiveBtn]: upcomingFilter,
            [classes.activeBtn]: pastFilter,
          })}
        >
          Past and Cancelled
        </Button>
        {upcomingFilter &&
          upcoming.map((trip) => <TripAccordion key={trip._id} trip={trip} />)}
        {/* {pastFilter &&
          past.map((trip) => (
            <TripAccordion key={trip.flight.QuoteId} trip={trip} />
          ))} */}
        {upcomingFilter && !upcoming.length && (
          <div className={classes.noTrips}>
            <Typography variant="h4">
              You currently have no booked trips.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: classes.activeBtn }}
              onClick={handleRedirect}
            >
              Book a trip
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};
export default Itinerary;
