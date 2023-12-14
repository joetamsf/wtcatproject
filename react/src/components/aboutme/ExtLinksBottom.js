import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

{/*
    ExtLinksSide component is intended to be displayed when the width
    is bigger than 650px, which is for desktop browser.

    ExtLinksBottom component will be displayed when the width is <= 650px,
    which is targeted on mobile devices
*/}

export const ExtLinksSide = (props) => {
    const extlinks = props.extlinks;
    const [ currentExtLink, setCurrentExtLink ] = useState('');
    const [ showCanvas, setShowCanvas ] = useState(false);
    
    return (
        <div className='extlink-div ml-3' style={{marginLeft: '1%'}}>
            <div style={{ backgroundColor: 'lightgray' }}>
                <h3>External Website</h3>
            </div>
            {
                extlinks.map((extlink, idx) => {
                    return (
                        <Button className='external-btn'
                            key={`sideButton-${idx}`}
                            variant="link" 
                            style={{ border: 'solid .5px' }} 
                            onClick={() => {setShowCanvas(true);setCurrentExtLink(extlink)}}
                        >
                            <Image key={`side-${extlink.name}`} src={extlink.image} rounded/></Button>
                    )
                })
            }
            <Offcanvas className='offcanvas-border' show={showCanvas} onHide={() => {setShowCanvas(!showCanvas)}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{currentExtLink.name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {currentExtLink.description}
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    )
}

export const ExtLinksBottom = (props) => {
    const extlinks = props.extlinks;
    const [ currentExtLink, setCurrentExtLink ] = useState('');
    const [ showCanvas, setShowCanvas ] = useState(false);


    return (
            <Container className='extlink-xs'>
                <Row style={{ backgroundColor: 'lightgray', height: '5vh' }} className='mt-3'>
                    <Col style={{ textAlign: 'center' }}>
                        <h3>External Website</h3>
                    </Col>
                </Row>
                <Row className='mt-3 mb-3'>
                    {
                        extlinks.map((extlink, idx) => {
                            return(
                                <Col key={`col-bottom-${idx}`} xs={6}>
                                    <Button 
                                        key={`bottom-${idx}`} 
                                        variant="link" 
                                        style={{ border: 'solid .5px' }} 
                                        onClick={() => {setShowCanvas(true);setCurrentExtLink(extlink)}}    
                                    >
                                        <Image key={`bottom-${extlink.name}`} src={extlink.image} rounded/>
                                    </Button>
                                </Col>
                            )
                        })
                    }
                <Offcanvas 
                    className='offcanvas-border-bottom' 
                    show={showCanvas} 
                    onHide={() => { setShowCanvas(!showCanvas) }}
                    placement='top'
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>{currentExtLink.name}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {currentExtLink.description_short}
                    </Offcanvas.Body>
                </Offcanvas>
                </Row>
            </Container>        
    )
}
