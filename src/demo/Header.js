import {Button, Col, Container, Row} from "react-bootstrap";

const style = {
    logo: {
        fontSize: "18px",
        color: "#fff"
    },
    logoImg: {
        width: "20px",
        height: "25px",
        marginRight: "12px"
    },
    header: {
        width: "100%",
        maxWidth: "false",
        padding: "0",
        backgroundColor:"#24292e", color: "#fff",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        fontWight: "400",
    },
    link: {
        textDecoration: "none"
    }
}
export default function HeaderFrame() {
    return (
        <Container style={style.header}>
            <Row style={{height:"70px", alignItems:"center", padding: "0 16px"}}>
                <Col>
                    <a href="/" style={style.link}>
                        <h1 style={style.logo}>
                            <img style={style.logoImg}
                                className="logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDM2IDMyIj4KICA8cGF0aAogICAgZmlsbC1ydWxlPSJldmVub2RkIgogICAgY2xpcC1ydWxlPSJldmVub2RkIgogICAgZD0iTTMwLjM0MyAyMS45NzZhMSAxIDAgMDAuNTAyLS44NjRsLjAxOC01Ljc4N2ExIDEgMCAwMS41MDItLjg2NGwzLjEzNy0xLjgwMmExIDEgMCAwMTEuNDk4Ljg2N3YxMC41MjFhMSAxIDAgMDEtLjUwMi44NjdsLTExLjgzOSA2LjhhMSAxIDAgMDEtLjk5NC4wMDFsLTkuMjkxLTUuMzE0YTEgMSAwIDAxLS41MDQtLjg2OHYtNS4zMDVjMC0uMDA2LjAwNy0uMDEuMDEzLS4wMDcuMDA1LjAwMy4wMTIgMCAuMDEyLS4wMDd2LS4wMDZjMC0uMDA0LjAwMi0uMDA4LjAwNi0uMDFsNy42NTItNC4zOTZjLjAwNy0uMDA0LjAwNC0uMDE1LS4wMDQtLjAxNWEuMDA4LjAwOCAwIDAxLS4wMDgtLjAwOGwuMDE1LTUuMjAxYTEgMSAwIDAwLTEuNS0uODdsLTUuNjg3IDMuMjc3YTEgMSAwIDAxLS45OTggMEw2LjY2NiA5LjdhMSAxIDAgMDAtMS40OTkuODY2djkuNGExIDEgMCAwMS0xLjQ5Ni44NjlsLTMuMTY2LTEuODFhMSAxIDAgMDEtLjUwNC0uODdsLjAyOC0xNi40M0ExIDEgMCAwMTEuNTI3Ljg2bDEwLjg0NSA2LjIyOWExIDEgMCAwMC45OTYgMEwyNC4yMS44NmExIDEgMCAwMTEuNDk4Ljg2OHYxNi40MzRhMSAxIDAgMDEtLjUwMS44NjdsLTUuNjc4IDMuMjdhMSAxIDAgMDAuMDA0IDEuNzM1bDMuMTMyIDEuNzgzYTEgMSAwIDAwLjk5My0uMDAybDYuNjg1LTMuODM5ek0zMSA3LjIzNGExIDEgMCAwMDEuNTE0Ljg1N2wzLTEuOEExIDEgMCAwMDM2IDUuNDM0VjEuNzY2QTEgMSAwIDAwMzQuNDg2LjkxbC0zIDEuOGExIDEgMCAwMC0uNDg2Ljg1N3YzLjY2OHoiCiAgICBmaWxsPSIjMDA3RkZGIgogIC8+Cjwvc3ZnPgo="/>
                            Store
                        </h1>
                    </a>
                </Col>
                <Col>
                    <div></div>
                </Col>
                <Col>
                    <Button variant="primary">Buy now</Button>
                </Col>
            </Row>
        </Container>
    )
}