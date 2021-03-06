import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

// Components
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

// redux stuff
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

//-------------------------
// Main React Component
//--------------------------
const Homescreen = () => {
  // React-Redux app level state: All Products List
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
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
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

//-----------------
// Default export
//----------------
export default Homescreen;
