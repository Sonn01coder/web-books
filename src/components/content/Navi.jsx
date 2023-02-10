import { Col, Container, Row, InputGroup, FormControl } from 'react-bootstrap';
import background1 from "../../asset/img/bg1.png"
import "./navi.css"


function Navi(props) {
    return (
        <Container className="modal-fullscreen">
            <Row className='navi_wrap'>
                <Col md={7} className='navi_sologan d-flex justify-content-start align-items-center'>Một cuốn sách là một giấc mơ mà bạn cầm trong tay</Col>
                <Col md={5} className='  d-flex align-items-center flex-column'>
                    <h2>Cuốn sách của riêng bạn</h2>
                    <InputGroup>
                        <FormControl placeholder="Tìm kiếm tại đây..."  className='navi_input'/>
                        <InputGroup.Text className='navi_input-icon'><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                    </InputGroup>
                    <div className='d-flex justify-content-center'>
                        <img src={background1} alt="Background1" className='navi_img '/>
                    </div>
                </Col>  
            </Row>
        </Container>
    );
}

export default Navi;