import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { selectAllLogs } from "../../features/changelogs/changeLogsSlice";
import { useSelector } from "react-redux";

export const ChangeLog = () => {
    const changeLogs = useSelector(selectAllLogs);
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
                    {
                        changeLogs.slice(0).reverse().map((changeLog) => {
                            return (
                                <h6>{changeLog.msg}</h6>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    )

}