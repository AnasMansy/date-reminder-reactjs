import React from 'react'
import { Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <Row>
      <Col sm="12" className='justify-content-center text-center'>
        <h1>Menu</h1>      
      </Col>
      <Col sm="12" className='justify-content-center text-center'>
        <div className='header-line text-center'></div>
      </Col>
    </Row>
  )
}
export default Header
