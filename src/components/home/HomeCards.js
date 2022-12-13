import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeCards = (props) => {
    const homecards = props.homecards;

    return (
        <Container>
            <Row>
                {
                    homecards.map(homecard => {
                        return (
                        <Col xs="12" sm="4" className="mb-2" >
                            <Card className='text-start' style={{color: 'black'}}>
                                <Card.Header>{homecard.cardtitle}</Card.Header>
                                <Card.Body>
                                    <Card.Img variant="top" src={homecard.image}/>
                                    <Card.Text>
                                        {homecard.cardtext}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        );
                    })
                }
            </Row>
        </Container>
    )

}

export default HomeCards;