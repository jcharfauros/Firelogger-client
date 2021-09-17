import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import home from "../assets/pexelhome.jpg";
import Signup from "../auth/Signup";
// import Login from "../auth/Login";
import "../App.css";

const JumboHome = (props) => {
  return (
    <Router>
      <div>
        <div>
          <Jumbotron fluid>
            <Container className="text-center" fluid>
              <hr className="hr-1" />
              <h1 className="display-2 font-test">FireLogger</h1>
              <p className="font-test">
                When the unexpected happens, FireLogger is here to help you keep
                track of you what you consider to be valuable.
              </p>
              <br />
              <p className="font-test">
                With FireLogger, you can log your valuables in one place before
                the unexpected! If the unthinkable happens, such as a fire
                consuming your home, you have a list of your valuables at the
                click of a button. You can log serial numbers, item value and
                even a photo of each of your valuables!
              </p>
              <br />
              <h3 className="font-test">
                Signup to start logging your valuables today!
                Click <Link to="/signup">here</Link> to get started!
              </h3>
              <img src={home} alt="home_image" className="img-fluid" />
            </Container>
          </Jumbotron>
        </div>

        {/* <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
};

export default JumboHome;
