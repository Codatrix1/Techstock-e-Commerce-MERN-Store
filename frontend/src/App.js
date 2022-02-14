import React from "react";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = function () {
  return (
    <React.Fragment>
      {/*Header*/}
      <Header />

      {/*Body*/}
      <main className="py-3">
        <Container>
          <h1>Welcome to Techstock</h1>
        </Container>
      </main>

      {/*Footer*/}
      <Footer />
    </React.Fragment>
  );
};

export default App;
