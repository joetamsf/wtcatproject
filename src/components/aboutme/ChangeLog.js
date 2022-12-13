import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ChangeLog = () => {
    return (
        <Container className='mt-3 mb-3'>
            <Row 
                style={{
                    backgroundColor: 'lightpink',
                    height: '30vh'
                }} 
                className='container-radious-border'
            >
                <Col style={{ textAlign: 'left'}}>
                    <h3>Change Log</h3>
                    <h6>11/07/22 - In Progress to translate BootStrap webpages to React</h6>
                </Col>
            </Row>
        </Container>
    )

}