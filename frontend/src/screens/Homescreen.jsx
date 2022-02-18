import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

// Components
import Product from "../components/Product";

// redux stuff
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

// React Component
const Homescreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              {/*Single Product Component*/}
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

export default Homescreen;
