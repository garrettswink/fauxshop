// Product
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;


// Home Screen
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <>
    <h1>Latest Products</h1>
    <Row>
       {products.map((product) => (
    
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
         <Product product={product} />
            </Col>
       ))} 
    </Row>
    </>
  )
}

export default HomeScreen

// Prompt
Is it just me or is this a great example of passing props in React?