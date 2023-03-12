import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'reactstrap';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import ToastContainer  from 'react-bootstrap/ToastContainer';
import { selectPrev, selectNext } from './BeginnerSelectorFunc';
import { useSelector } from 'react-redux';
import { selectAllTips } from '../../features/beginners/beginnersSlice';
import parse from 'html-react-parser';
// import { show } from 'dom7';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';



const BeginnersGuide = () => {
    // const beginners = props.beginners;

    const tipSize = useRef(0);
    const allTips = useSelector(selectAllTips);

    const [ showToast, setShowToast ] = useState(false); 
    const [ showModal, setShowModal ] = useState(false);
    const [ currentButton, setCurrentButton ] = useState(allTips[0]);
    const [ modalTitle, setmodalTitle ] = useState('');
    const [ modalImage, setModalImage ] = useState('');
    const [ modalContent, setModalContent ] = useState(allTips[0].description);


    useEffect(() => {
        setmodalTitle(currentButton.name);
        setModalImage(currentButton.iconfolder + currentButton.img);
        setModalContent(currentButton.description);
    }, [currentButton]);

    // Since it needs some time to refresh the value of modalContent before 
    // we can get the updated tipSize variable, 
    // using an useEffect hook on modalContent can make sure tipSize always holding the updated value
    useEffect(() => {
        const getSize = tipSize.current;
        if (getSize.scrollHeight > getSize.offsetHeight) {
            setShowToast(true)
        }
    }, [modalContent]);


    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const prevButton = () => {
        setCurrentButton(selectPrev(currentButton.id));
    }

    const nextButton = () => {
        setCurrentButton(selectNext(currentButton.id));
    }

    return (
        <>
        {
            // beginners.map((beginner) => {
            //     return(
            //     <div className='beginner-guide-container'>
            //         <Button 
            //             color="link" 
            //             onClick={ () => {
            //                 setCurrentButton(beginner);
            //                 toggleModal();
            //             }
            //             }
            //             className='beginner-guide-button'
            //         >
            //             <Image className='beginner-image' alt={beginner.img} src={beginner.iconfolder + beginner.img} style={{border: 'solid .5px'}} rounded/>
            //         </Button>
            //     </div>
            //     )
            // })

            allTips.map((alltip) => {
                return(
                <div className='beginner-guide-container'
                    key={alltip.name + '_' + alltip.id}
                >
                    <Button
                        
                        color="link" 
                        onClick={ () => {
                            setCurrentButton(alltip);
                            toggleModal();
                        }
                        }
                        className='beginner-guide-button'
                    >
                        <Image className='beginner-image' alt={alltip.img} src={alltip.iconfolder + alltip.img} style={{border: 'solid .5px'}} rounded/>
                    </Button>
                </div>
                )
            })
            
        }
        <Modal
            show={showModal}
            centered
            onHide={() => setShowModal(false)}
            contentClassName='modal-content'
        >
            <Modal.Header closeButton className='modal_Color'>
            <Modal.Title className='ms-auto ' >
                {modalTitle}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex' >
                    <Image className='modal-image' height={125} width={125} src={modalImage} rounded/>
                    <span ref={tipSize} className='modal_body_span'>
                        {parse(modalContent)}
                    </span>
                </div>
                <ToastContainer position='bottom-center'>
                <Toast show={showToast} 
                    delay={1250}
                    autohide
                    onClose={() => setShowToast(!showToast) }
                    bg='light'
                >
                    <Toast.Body className='text-center'>     
                        <div><FontAwesomeIcon icon={faArrowDown} /> Scroll down for reading more!</div> 
                    </Toast.Body>
                </Toast>
                </ToastContainer>
            </Modal.Body>
            <Modal.Footer 
                style={{
                display: 'flex',
                justifyContent: 'center',

            }}>
                    <Button 
                        color="warning" 
                        onClick={() => {
                            setShowToast(false);
                            prevButton();
                        }}
                    >
                        PREV
                    </Button>
                    <Button color="primary" onClick={toggleModal}>
                        Close
                    </Button>
                    <Button 
                        color="success"
                        onClick={() => {
                            setShowToast(false);
                            nextButton();
                        }}
                    >
                        Next
                    </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default BeginnersGuide;