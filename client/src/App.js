import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "./context/context";

import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme";
import "./App.css";
import { SnackbarProvider } from "notistack";

import LandingPage from "./pages/LandingPage/LadingPage";
import Explore from "./pages/Explorer/Explore";
import Flights from "./pages/Flights/Flights";
import Hotels from "./pages/Hotels/Hotels";
import Header from "./components/Navbar/Header";
import Profile from "./pages/User/Profile";
import Checkout from "./components/Stripe/Checkout";
import Success from "./components/Stripe/Success";
import Error from "./components/Stripe/Error";
import Cars from "./pages/Rental/Cars";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={2}>
        <Provider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/explore" component={Explore} />
              <Route exact path="/flights" component={Flights} />
              <Route exact path="/hotel" component={Hotels} />
              <Route exact path="/cars" component={Cars} />
              <Route path="/profile" component={Profile} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/payment-success" component={Success} />
              <Route exact path="/payment-error" component={Error} />
              <Route exact path="/" component={LandingPage} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}

export default App;
