import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import { selectPrev, selectNext } from './BeginnerSelectorFunc';
import { useSelector } from 'react-redux';
import { selectAllTips } from '../../features/beginners/beginnersSlice';

const BeginnersGuide = () => {
    // const beginners = props.beginners;

    const allTips = useSelector(selectAllTips);

    const [ showModal, setShowModal ] = useState(false);
    const [ currentButton, setCurrentButton ] = useState(allTips[0]);
    const [ modalTitle, setmodalTitle ] = useState('');
    const [ modalImage, setModalImage ] = useState('');
    const [ modalContent, setModalContent ] = useState('');


    useEffect(() => {
        setmodalTitle(currentButton.name);
        setModalImage(currentButton.iconfolder + currentButton.img);
        setModalContent(currentButton.description);
    }, [currentButton]);

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
                <div className='beginner-guide-container'>
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
            <Modal.Header closeButton>
            <Modal.Title className='ms-auto'>
                {modalTitle}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Image className='modal-image' width={125} src={modalImage}  />
                    <span>{modalContent}</span>
                </div>

            </Modal.Body>
            <Modal.Footer style={{
                display: 'flex',
                justifyContent: 'center'

            }}>
                    <Button 
                        color="warning" 
                        onClick={() => prevButton()}
                    >
                        PREV
                    </Button>
                    <Button color="primary" onClick={toggleModal}>
                        Close
                    </Button>
                    <Button 
                        color="success"
                        onClick={() => nextButton()}
                    >
                        Next
                    </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default BeginnersGuide;