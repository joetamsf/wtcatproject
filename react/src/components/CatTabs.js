import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Col, Row } from 'reactstrap';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { catsTabSelector, selectCatByName, catsArrStatus, catsArrErr } from '../features/cats/catsSlice';
import CatCarousel from './cats/CatCarousel';
import CatProfile from './cats/CatProfile';
import { selectCheckedAlbum, addlastCheckedAlbum } from '../features/app/appSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const CatTabs = () => {
    const dispatch = useDispatch();

    const curStatus = useSelector(catsArrStatus);
    const isError = useSelector(catsArrErr);

    const checkedAlbum = useSelector(selectCheckedAlbum);

    const [ mainTab, setMainTab ] = useState(checkedAlbum);
    const cats = useSelector(catsTabSelector);


    const selectedCat = useSelector(selectCatByName(mainTab));

    const updateMainTab = (key) => {
       dispatch(addlastCheckedAlbum(key));
       setMainTab(key);
    }

    
    return (
        <>
        { isError ? (
            <div>Error</div>
        ) :  
        curStatus ? (
            <div>
                Now Loading
            </div>
        )
            : (
                <>
        <Row>
        <Tabs activeKey={mainTab} className="mb-5" 
            onSelect={
                updateMainTab
            }
        >
            {
            cats.map(
                (cat) => {
                return (
                    <Tab eventKey={cat.name} title={cat.name} key={cat.name}>
                        <Row>
                        <Col sm={1}  className='d-none d-sm-block'><img alt={cat.name} src={cat.thumbnail} key={cat.id}/>
                        </Col>
                        <Col sm={9}>
                            <Row>
                                <Col xs={10} sm={11}>
                                    <div key={cat.name}>
                                        <p style={{textAlign: 'left'}}>{cat.name}
                                        <span> </span>
                                         <FontAwesomeIcon icon={faHeart} /> {cat.likes}</p>
                                    </div>                               
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={10}>
                                    <pre style={{textAlign: "left",
                                                whiteSpace: "pre-wrap",
                                                overflowX: "auto",
                                                font: "inherit"
                                        }}
                                        key={cat.name}
                                        >{cat.description}</pre>
                                </Col>
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
    )}
    </>
    );
    }

export default CatTabs;