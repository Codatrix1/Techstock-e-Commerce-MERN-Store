import React from "react";
import { Row, Col } from "react-bootstrap";

import Product from "../components/Product";

// from static file
import products from "../products";

const Homescreen = () => {
  return (
    <React.Fragment>
      <h1>Latest Products</h1>

      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            {/*Single Product Component*/}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Homescreen;
