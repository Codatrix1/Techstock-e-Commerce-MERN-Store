import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

// Components
import Product from "../components/Product";

// React Component
const Homescreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // const result = await axios.get("/api/products");
      // setProducts(result.data);

      const { data } = await axios.get("/api/v1/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

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
