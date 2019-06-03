import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import "./App.css";

import Home from "./components/Home";
import HomeA from "./components/HomeA";

const App: React.FC = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route strict exact path="/" component={Home} />
          <Route strict exact path="/home" component={HomeA} />
        </Switch>
      </Router>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1000px;
  min-height: 100hv;
  margin: auto;
`;

export default App;
