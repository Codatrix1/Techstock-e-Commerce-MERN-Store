import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Screens
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";

// React Component
const App = function () {
  return (
    <Router>
      {/*Header*/}
      <Header />

      {/*Body*/}
      <main className="py-3">
        <Container>
          <Route path="/" exact component={Homescreen} />
          <Route path="/product/:id" component={Productscreen} />
        </Container>
      </main>

      {/*Footer*/}
      <Footer />
    </Router>
  );
};

export default App;
