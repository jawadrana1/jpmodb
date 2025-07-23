import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Cards({productId,imgSrc,title,desc}) {

    const navigate = useNavigate();


    

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc.slice(0,100)}
        </Card.Text>
        <Button onClick={()=>navigate(`/product/${productId}`)} variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;