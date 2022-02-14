import React from "react";
import { Card } from "react-bootstrap";

import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* Product Image*/}
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body>
        {/* Product Title*/}
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

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
