import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap' 
const Category = ({menu,filterCategory}) => {
  
  return (
    <Row className='cat-container d-flex justify-content-center text-center mt-2'>
      <Col sm="12">
        {menu.map((e, index) => {
          return <Button key={index} value={e} className='m-2' variant="outline-success" 
          onClick={(e)=>filterCategory(e.target.value)}
          >{e}</Button>
        })}
      </Col>
    </Row>
  )
}

export default Category
