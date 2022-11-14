import { Navbar, Nav, Col, Button, Container, Row } from 'react-bootstrap';
import React, { Component, useState } from 'react'
import { person } from './data';
function App() {

  const [display,setDisplay]=useState(true);
  const handleDisplay=()=>{ 
    setDisplay(true) 
  }
  const handleDelete=()=>{ 
    setDisplay(false) 
  }
  return (
    <div className="App">
      <Container className='py-5'>
        <Row>
          <Col sm="8" className="py-8">
            {person.length ?
              (<p>you hav a
                <span style={{ color: 'red' }}> {person.length}</span> dates
              </p>) : <p>no dates</p>}
          </Col>
        </Row>
        <Row>
          <Col sm="8" className="py-8 my-2">
            <div className='content p-2'>

              {display&&
                person.length ? (person.map((e) => {
                  return <>
                    <div className='d-flex item my-2'>
                      <img className='avatar' src={e.img} />
                      <div>
                        <p>{e.name}</p>
                        <p>{e.date}</p>
                      </div>
                    </div>
                  </>
                })) : null
              }

            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="8" className="py-8 d-flex justify-content-between  p-5">
            <Button className='btn btn-danger px-5' onClick={handleDelete}>delete all</Button>
            <Button className='btn btn-primary px-5'  onClick={handleDisplay}>display all dates</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
