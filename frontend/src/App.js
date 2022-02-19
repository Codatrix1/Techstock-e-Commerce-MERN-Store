import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Screens
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";
import Cartscreen from "./screens/Cartscreen";

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
          {/*INFO: /cart/:id? means that id is otional */}
          <Route path="/cart/:id?" component={Cartscreen} />
        </Container>
      </main>

      {/*Footer*/}
      <Footer />
    </Router>
  );
};

export default App;
