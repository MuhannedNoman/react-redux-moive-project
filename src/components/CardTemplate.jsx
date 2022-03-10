import React from 'react'
import { Card } from 'react-bootstrap'

function CardTemplate({ imageSrc, text, title }) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  return (
    <Card
      style={{
        paddingTop: '5px',
        border: '1px solid #ccc',
        width: '18rem',
        marginRight: '5px',
      }}
    >
      <Card.Img
        style={{ width: '8rem', height: '11rem' }}
        variant='top'
        src={`${IMG_URL}/${imageSrc}`}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: '17px' }}>
          {title.length > 35 ? title.slice(0, 25) + '...' : title}
        </Card.Title>
        <Card.Text
          style={{
            color: 'black',
            fontSize: '13px',
            fontWeight: 'bold',
            width: '12%',
            borderRadius: '20%',
            margin: '0 auto',
            backgroundColor: 'pink',
          }}
        >
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardTemplate
