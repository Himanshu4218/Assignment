import React from 'react'
import { Card } from 'react-bootstrap'


const User = ({ user }) => {
  return (
    <Card className='my-3 p-3 rounded flex-fill'>
      <Card.Img src={user.avatar} variant='top' />
      <Card.Body>
        <Card.Title as='div'>
          <strong>{user.first_name} {user.last_name}</strong>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><a href={`mailto:${user.email}`}>{user.email}</a></Card.Subtitle>
        <Card.Text as='h3'>{user.domain}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default User