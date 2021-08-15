import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Button, Modal, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'; 

function Header () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        return (
                <div classNae="margin-t-b">
                <Navbar bg="light sticky-top" expand="lg">
                    <Navbar.Brand href="#home">Alkaline Cafe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">   
                            <Nav.Link href="#">Shop</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes" onClick={handleShow}>
                            Login
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
                </div>
        );
    }


export default Header;