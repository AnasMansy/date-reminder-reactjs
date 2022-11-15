import React, { useState } from 'react'
import { Row, Button, Form, Col } from 'react-bootstrap';
import { qustions } from '../data';
const FormIn = ({onAdd }) => {

const [newQ,setNewQ]=useState("")
const [newA,setNewA]=useState("")
const addNewItem=()=>{  
  if(newQ.length&&newA.length){
     let newId=qustions.length?qustions[qustions.length-1].id+1: 0;
  qustions.push({id:newId ,q:newQ,a:newA})
  setNewA("");
  setNewQ("");
  onAdd(); }
}
  return (
    <Row className='py-3'>
      <Col sm="5" className=''>
        <Form.Control tupe="text" id="TextInput" placeholder="enter the qustion" 
          onChange={(e)=>{
            setNewQ(e.target.value)
          }}
          value={newQ}
        />

      </Col>

      <Col sm="5">
        <Form.Control tupe="text" id="TextInput" placeholder="answer the qustion" 
             onChange={(e)=>{
            setNewA(e.target.value)
          }}
          value={newA}
        />
      </Col>
<Col sm="2">
        <button className='btn btn-primary w-100' type="submit" onClick={addNewItem}>Submit</button>

</Col>
    </Row>

  )
}

export default FormIn 