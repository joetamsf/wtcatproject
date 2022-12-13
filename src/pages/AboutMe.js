import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import jtthumbnail from '../imgs/ben_thumbnail.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { ChangeLog } from "../components/aboutme/ChangeLog";
import { EXTLINKS } from "../app/EXTLINKS";
import { ExtLinksBottom, ExtLinksSide } from "../components/aboutme/ExtLinksBottom";




const AboutMe = () => {

    return (
        <div className='mt-3' 
            style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            }}
        >
            <div className='aboutme-div'> 
                <Container>
                    <Row 
                        style={{backgroundColor: 'yellow'}}
                        className='container-radious-border'
                    
                    >
                        <Col xs='auto' style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image src={jtthumbnail}
                                roundedCircle
                                className='mb-5'
                            />
                        </Col>
                        <Col>
                            <h3 style={{ textAlign: 'left', paddingTop: '20px' }}>Joe Tam</h3>
                            <p style={{ textAlign: 'left' }}>
                                Fromer server engineer in Hong Kong. We moved to the United States in 2021.
                                I am also a cat lover, as the first portfolio project of FullStack developer bootcamp,
                                I would like use this mini website to share photos of cats around me and some useful information for beginners.
                            </p>
                        </Col>
                    </Row>
                    <Row style={{backgroundColor: 'aqua'}} className='mt-3 container-radious-border'>
                        <Col style={{ textAlign: 'left' }}>
                            <h3 style={{ paddingTop: '20px' }}>My Works</h3>
                            <h6>Python</h6>
                            <p>1. Django restaurant backend</p>
                            <p>
                                <a href="https://github.com/joetamsf/honproject" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} /> Source Code
                                </a>
                            </p>
                            <p>
                                <a href="http://proj3.jtsfprojects.com/" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faLink} /> URL
                                </a>
                            </p>
                            <p>
                                <a href="https://www.youtube.com/watch?v=CRpkdqNRHYY" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faYoutube} /> YouTube
                                </a>
                            </p>
                            <h6>BootStrap</h6>
                            <p>Whats the Cat</p>
                            <p>
                                <a href="https://github.com/joetamsf/bootstrap_project" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} /> Source Code
                                </a>
                            </p>
                        </Col>
                    </Row>
                    </Container>
                    <ChangeLog />
                    <ExtLinksBottom extlinks={EXTLINKS} />
                    {/*
                    <Container className='extlink-xs'>
                    <Row style={{backgroundColor: 'lightgray', height: '5vh'}} className='mt-3'>
                        <Col style={{ textAlign: 'center'}}>
                            <h3>External Website</h3>
                        </Col>
                    </Row>
                    <Row className='mt-3 mb-3'>
                        <Col xs={6}>
                            <Button variant="link" style={{border: 'solid .5px'}} ><Image src='images/external/javadrive.png' /></Button>
                        </Col>
                        <Col xs={6}>
                            <Button variant="link" style={{border: 'solid .5px'}} ><Image src='images/external/eb_scpa.jpg' rounded/></Button>
                        </Col>
                    </Row>
                </Container>
                    */}
            </div>
            <ExtLinksSide extlinks={EXTLINKS} />
        </div>
    )
}

export default AboutMe;