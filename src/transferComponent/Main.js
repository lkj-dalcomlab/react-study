import React, {useState} from "react";
import {Button, Container, Row} from "react-bootstrap";
import ViewComponent from "./ViewComponent";

class FirstComponent extends React.Component {
    render() {
        return(
            <div>first123</div>
        )
    }
}

class SecondComponent extends React.Component {
    render() {
        return(
            <div>second321</div>
        )
    }
}
function Main() {
    const [component, setComponent] = useState("first");
    return (
        <Container>
            <Row>
                <Button variant={"primary"} onClick={()=>setComponent("first")}>first</Button>
                <Button variant={"primary"} onClick={()=>setComponent("second")}>second</Button>
            </Row>
            <Row>
                <ViewComponent render={()=> component === "first" ? <FirstComponent/> : <SecondComponent/>}/>
            </Row>
        </Container>
    )
}

// class Index extends React.Component {
//     render() {
//         return (
//             <Command/>
//         )
//     }
// }

export default Main;