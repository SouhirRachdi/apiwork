import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const User = ({user,variant}) => {

  return <div >
     <Card
  bg={variant.toLowerCase()}

  text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
  style={{ width: '18rem' ,height:"13rem" }} >
 

  <Card.Header>{user.name}
  {user.username}
  </Card.Header>
  <Card.Body>
    <Card.Title>{user.address.city}</Card.Title>
    <Card.Text>
     {user.company.catchPhrase}
     {user.email}
    </Card.Text>
    {user.phone}
  </Card.Body>
</Card></div>;
};

export default User;
