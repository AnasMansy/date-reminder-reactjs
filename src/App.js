import { Navbar, Nav, Col, Button, Container, Row } from 'react-bootstrap';
import React, { Component, useState } from 'react'
import NavBar from './component/NavBar';
import Header from './component/Header';
import Category from './component/Category';
import Items from './component/Items';
import menu from './data';
function App() {
  const [items, setItems] = useState(menu)
  const uniqueCat = ["all", ...new Set(menu.map(item => item.cat))];
  const filterCategory = (e) => {
    if (e === "all")
      setItems(menu)
    else {
      const newItems = menu.filter(item => item.cat == e)
      setItems(newItems)
    }
  }

  const search = (e) => {
      const newItems = menu.filter(item => item.title.includes(e)  )
      setItems(newItems)
  }
  return (
    <div className="App">
      <NavBar search={search} />
      <Container className=''>
        <Header />
        <Category filterCategory={filterCategory} menu={uniqueCat} />
        <Items items={items} />
      </Container>
    </div>
  );
}

export default App;
