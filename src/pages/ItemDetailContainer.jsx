import React from "react";
import Card from "react-bootstrap/Card";

import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";

export const ItemDetailContainer = () => {
  const { productId } = useParams();

  const { product} = useSingleProduct(productId);

  return (
    <Card key={product.id} style={{ width: "18rem", margin: 20 }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
