import React from 'react';
import { Card } from 'react-bootstrap';
import Users from '../Users';
import './post.css'

const  Post = ({Posts}) => {
  return (

    [
  'Primary',
  'Secondary',
  'Success',
  'Danger',
  'Warning',
  'Info',
  'Light',
  'Dark',
].map((variant, idx) => (
  <Card
    bg={variant.toLowerCase()}
    key={idx}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
  <Card.Body>
    <Card.Title>{Users.filter((u)=>u.id === Posts.userId)[0].username } </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{Posts.title}</Card.Subtitle>
    <Card.Text>
    {Posts.body}
    </Card.Text>
  
  </Card.Body>
</Card>
))
  );
}

export default Post;
