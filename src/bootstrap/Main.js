import React from "react";
import {Container, Row} from "react-bootstrap";
import VerticalPane from "./lib/VerticalPane";
import TopLayout from "./TopLayout";
import LeftLayout from "./LeftLayout";

import './main.css'
import 'bootstrap/dist/css/bootstrap.css'
import RightLayout from "./RightLayout";


function Main() {
    return (
        <Container style={{height: '100vh'}}>
            <Row>
                <TopLayout/>
            </Row>
            <Row style={{height: '100%'}}>
                <VerticalPane leftRender={()=><LeftLayout/>}>
                </VerticalPane>
            </Row>
        </Container>
    );
}

export default Main;