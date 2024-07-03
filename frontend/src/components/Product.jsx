import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

// In order to keep the cards the same size the product titles are kept to one line with an elipsis
// This is brought in via index.css with the product-title class

const Product = ({ product }) => {

  const imageUrl = product.image.replace('/frontend/public', '');

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
      <Card.Img src={imageUrl}  variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
       </Link>

        <Card.Text as="div">
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;



