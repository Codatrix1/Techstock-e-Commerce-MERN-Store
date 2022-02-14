import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// Components
import Rating from "./Rating";

// React component
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* Product Image*/}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        {/* Product Title*/}
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          {/* Product Rating & Review Component */}
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">
          {/* Product Price */}${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
