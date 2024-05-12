import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
// import products from '../products';
import Product from '../components/Product';


const HomeScreen = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };
  
    fetchProducts();
  }, []);

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

