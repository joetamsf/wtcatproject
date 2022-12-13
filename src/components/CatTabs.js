import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Col, Row } from 'reactstrap';
import React, { useState } from 'react';
import { selectCatById } from './cats/CatSelectorFunc';
import CatCarousel from './cats/CatCarousel';
import CatProfile from './cats/CatProfile';


const CatTabs = (props) => {
    const [ mainTab, setMainTab ] = useState('Chibi');
    const cats = props.cat;
    const selectedCat = selectCatById(mainTab);
    console.log(cats);
    
    return (
        <>
        <Row>

        <Tabs activeKey={mainTab} className="mb-5" onSelect={(key) => setMainTab(key)}>
            {
            cats.map(
                (cat) => {
                return (
                    <Tab eventKey={cat.name} title={cat.name} key={cat.id}>
                        <Row>
                        <Col xs={2} sm={1}><img src={cat.thumbnail} />
                        </Col>
                        <Col>
                            <Row>
                                <Col xs={12}><h5 style={{textAlign: "left"}}>{cat.name}</h5></Col>
                            </Row>
                            <Row>
                                <Col xs={10}><p style={{textAlign: "left"}}>{cat.description}</p></Col>
                            </Row>
                        </Col>
                        </Row>
                    </Tab>
                );
            }
            )}
        </Tabs>
        </Row>
        <Row>
            <Col xs={12} sm={5}>
                <CatCarousel cat={selectedCat} />
            </Col>
            <Col xs={12} sm={4}>
                <CatProfile profile={selectedCat} />
            </Col>
        </Row>
        </>
    );
}

export default CatTabs;