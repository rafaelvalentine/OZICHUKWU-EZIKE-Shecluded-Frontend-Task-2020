import React from 'react'
import Card from 'react-bootstrap/Card'
import '../../themes/sass/components/CatCard.sass'

export default props => {
  return (
  <Card  className='cards ml-5 mr-4 mb-4' >
  <Card.Img variant="top" src={props.url}/>
  <Card.Body>
    <Card.Title><span>Breed:</span> {props.breeds.name || 'moxie'}</Card.Title>
    <Card.Text>
        <span>Temperament: </span> {props.breeds.temperament}
    </Card.Text>
    <Card.Text>
        <span>Life Span: </span> {props.breeds.life_span}
    </Card.Text>
        <span> Shedding Level:</span> {props.breeds.shedding_level}
    <Card.Text>
        <span>Dog Friendly:</span> {props.breeds.dog_friendly}
    </Card.Text>
    <Card.Text>
        <span> Child Friendly: </span>{props.breeds.child_friendly}
    </Card.Text>
  </Card.Body>
</Card>
  )
}


