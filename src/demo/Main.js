import {Container, Row} from "react-bootstrap";
import HeaderFrame from "./Header";
import 'bootstrap/dist/css/bootstrap.css'
import Navigator from "./Navigator";
import Body from "./Body";
export default function Main() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"/>

            <Container style={{width:"100vw", maxWidth:"100vw"}}>
                <Row style={{height:"100vh"}}>
                    <Navigator/>
                    <Body/>
                    <Div>테스트</Div>
                </Row>
            </Container>
        </div>

    )
}