import React from 'react'
import Card from 'react-bootstrap/Card'
import '../../themes/sass/components/LOTRCard.sass'

export default props => {
  return (
  <Card  className='cards ml-5 mr-4 mb-4' >
  <Card.Img variant="top" src={require('../../themes/avatars/the_one_ring.jpg')}/>
  <Card.Body>
    <Card.Title><span>name:</span> {props.name || 'unknown'}</Card.Title>
    <Card.Text>
        <span>race: </span> {props.race || 'unknown'}
    </Card.Text>
    <Card.Text>
        <span>gender: </span> {props.gender || 'unknown'}
    </Card.Text>
        <span> birth:</span> {props.birth || 'unknown'}
    <Card.Text>
        <span>death:</span> {props.death || 'unknown'}
    </Card.Text>
    <Card.Text>
        <span>realm: </span> {props.realm || 'unknown'}
    </Card.Text>
    <Card.Text>
        <span> hair: </span>{props.hair || 'unknown'}
    </Card.Text>
    <Card.Link href={props.wikiUrl}>Click for more </Card.Link>
  </Card.Body>
</Card>
  )
}


