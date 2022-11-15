import { Navbar, Nav, Col, Button, Container, Row } from 'react-bootstrap';
import React, { Component, useState } from 'react'
import { person } from './data';
import FormIn from './component/FormIn';
import QList from './component/QList';
import { qustions } from './data';
function App() {
  const [data,setData]=useState(qustions);
 
  const storageData=JSON.parse(localStorage.getItem("items")) 
  const addItem=()=>{
    localStorage.setItem("items",JSON.stringify([...qustions]))
    setData([...qustions])
  }
  const deleteAll=()=>{
    if(localStorage.getItem("items")!=null){
    qustions.splice(0,qustions.length)
    localStorage.removeItem("items")}
    setData([...qustions])
  }
  const deleteOne=()=>{
    if(localStorage.getItem("items")!=null){
    setData([...qustions])
    localStorage.setItem("items",JSON.stringify([...qustions]))}
  }
  return (
    <div className="App">
      <Container className='py-5'>
        <Row className='justify-content-center'> 
        <Col sm="4" className="  text-center p-3 h4">
            Q & A
            </Col>  
          <Col sm="8" className=" text-center">
            <FormIn onAdd={addItem}/>
            <QList data={data} deleteOne={deleteOne}/>
            <Row className='px-2'>
            {storageData?(<button className='btn btn-danger   mt-3  'onClick={deleteAll}>delete all</button>): null}  
            </Row>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default App;
