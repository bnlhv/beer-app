import React from 'react';
import './NavigationBar.css'
import { Nav, Navbar, Image } from 'react-bootstrap'
import logo from '../assets/beer-logo.jpg'

export default function NavigationBar() {

  return (
        <Navbar expand="lg" sticky="top" >
            <Navbar.Brand href="/"><Image height={50} src={`${logo}`} alt="50x50" roundedCircle /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/About">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Breweries">Breweries</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
  );
}