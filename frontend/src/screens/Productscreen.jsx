import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";

// Components
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";

// redux stuff
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";

//---------------------
// React Component
//---------------------
const Productscreen = ({ match, history }) => {
  // React component level state: Add to cart
  const [qty, setQty] = useState(1);

  // React-Redux app level state: Single Product Details
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  // Add to Cart
  const addToCartHandler = () => {
    // props.history.push REDIRECTS
    history.push(`/cart/${match.params.id}?quantity=${qty}`);
  };

  return (
    <React.Fragment>
      {/* Go Back to Home Button*/}
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        // Single Product Screen
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            {/* Product info list*/}
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                {/* Rating Component*/}
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} ratings`}
                />
              </ListGroup.Item>

              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              {/* Price, stock, add to cart list*/}
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {/* Add to cart function: with Component Level State*/}
                {/* Start */}
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {/* Explaination: Result for array: [0,1,2,3,4... and so on]  and then we are mapping through to get [ 1,2,3,4,5... and so on] */}
                          {[...Array(product.countInStock).keys()].map(
                            (index) => (
                              <option key={index + 1} value={index + 1}>
                                {index + 1}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
                {/* Finish */}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};

export default Productscreen;
