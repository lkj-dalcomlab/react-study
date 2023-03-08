import React, {useState} from "react";
import './main.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Col, Container, Row, Button, Offcanvas} from "react-bootstrap";
// import {MDBCol, MDBContainer, MDBTreeview, MDBTreeviewItem, MDBTreeviewList} from 'mdbreact';

function About() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                About
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>About</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body id="about-body">
                    <p>{`
                        * Copyright DALCOMLAB Corporation - Flexus Web Server. 2021-2022
                        *
                        * Licensed under the Apache License, Version 2.0 (the "License");
                        * you may not use this file except in compliance with the License.
                        * You may obtain a copy of the License at:
                        *
                        * http://www.apache.org/licenses/LICENSE-2.0
                        *
                        * Unless required by applicable law or agreed to in writing, software
                        * distributed under the License is distributed on an "AS IS" BASIS,
                        * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
                        * implied. See the License for the specific language governing
                        * permissions and limitations under the License.
                        `}
                    </p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
class TopLayout extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Button onClick={() => {
                            window.location.href = '/home'
                        }}>Home</Button>
                    </Col>
                    <Col>
                        <About/>
                    </Col>
                    {/*<Nav variant="tabs" defaultActiveKey="/">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">about...</Nav.Link>
                        </Nav.Item>
                    </Nav>*/}
                </Row>
            </Container>
        )
    }
}

class LeftLayout extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}
class Main extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    {<TopLayout/>}
                </Row>
                <Row>
                    <Col>
                        <LeftLayout/>
                    </Col>
                    <Col>right</Col>
                </Row>
            </Container>
        )
    }
}

export default Main;