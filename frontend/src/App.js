import React from "react";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";

const App = function () {
  return (
    <React.Fragment>
      {/*Header*/}
      <Header />

      {/*Body*/}
      <main className="py-3">
        <Container>
          <Homescreen />
        </Container>
      </main>

      {/*Footer*/}
      <Footer />
    </React.Fragment>
  );
};

export default App;
