import React from 'react'
import { Row, Card, Col, Button } from 'react-bootstrap'
const Items = ({items}) => { 

  return (
    <Row>
      {items.length ? (items.map((e,id)=>{
        return  <Col key={id} sm="12" className='mb-2 col-sm-12'>
        <Card style={{ width: '18rem' }} className="d-flex flex-row w-100">
          <Card.Img variant="top" src={e.img} className='img-item' />
          <Card.Body>
            <Card.Title>{e.title}</Card.Title>
            <span style={{ color: "green" }} className=''>{e.price} $</span>
            <Card.Text>
             {e.desc}
            </Card.Text>
            <div >{e.cat}</div>
          </Card.Body>
        </Card>
      </Col>
      })
       ) :
        <h1>no food now</h1>}

    </Row>
  )
}

export default Items
