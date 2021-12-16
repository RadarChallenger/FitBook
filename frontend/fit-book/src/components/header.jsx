import React, { Component } from "react";
import logo from "./SpEARj01.svg";
import { Navbar, Nav, Container } from 'react-bootstrap';

class header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <>
        <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href="/panda">Progress</Nav.Link>
                        <Nav.Link href='/gorilla'>Calendar</Nav.Link>
                        <Nav.Link href='/rhino'>My Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
      </React.Fragment>
    );
  }
}

export default header;
