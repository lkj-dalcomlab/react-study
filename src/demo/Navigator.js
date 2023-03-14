import React, {useState} from "react";
import {Button, Container, Offcanvas, Row} from "react-bootstrap";

function Menu() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <span className="material-icons" style={{cursor:"pointer"}} onClick={handleShow}>
                menu
            </span>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Body id="menu-body" style={{padding:"0"}}>
                    <MenuBody/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

function MenuBody() {
    return (
        <Container style={{backgroundColor:"#1C2536", height:"100vh"}}>
            <Row></Row>
        </Container>
    )
}
export default function Navigator() {
    return (
        <div style={{width: "100vw", height: "70px", backgroundColor: "#efb"}}>
            <Menu/>
        </div>
    )
}