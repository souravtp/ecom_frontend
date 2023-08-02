import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tshirt from '../images/Tshirt.jpg'
import Shirt from '../images/Shirt.jpg'
import Hoodie from '../images/Hoodie.jpg'


function Main() {
  const products = [
    {
      id: 1,
      title: 'Yellow Tshirt',
      description: 'Yellow',
      image: Tshirt,
      price: 25.99
    },
    {
      id: 2,
      title: 'Shirt',
      description: 'Checked blue',
      image: Shirt,
      price: 35.99
    },
    {
      id: 3,
      title: 'Hoodie',
      description: 'Sky blue',
      image: Hoodie,
      price: 37.49
    },
  
  ];

  return (
    <div className='container mb-3 d-flex' style={{ gap: '20px' }}>
      {products.map((product) => (
      <Card key={product.id} className="mt-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} height={300} width={100}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text className="text-success">&#8377; {product.price}</Card.Text>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
      ))}
    </div>
  );
}

export default Main;