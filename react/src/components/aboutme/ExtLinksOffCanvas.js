import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

const ExtLinksOffCanvas = (props) => {
    const { name, description } = props;
    const [ show, setShow ] = useState(true);

    const hideCanvas = () => {
        setShow(false);
    }

    return (
        <Offcanvas show={show} onHide={hideCanvas}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>name - Sample </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                description - Sample 
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ExtLinksOffCanvas;