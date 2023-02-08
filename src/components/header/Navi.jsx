import { Col, Container, Row, Navbar, InputGroup, FormControl } from 'react-bootstrap';
import background1 from "../../asset/img/bg1.png"
import "./navi.css"


function Navi(props) {
    return (
        <Container className="modal-fullscreen">
            <Navbar>
                <Col md={8}></Col>
                <Col md={4}>
                    <Row className='d-flex justify-content-end'>
                        <Col md={4} className='login d-flex justify-content-end align-items-center'>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span>4</span>
                        </Col>
                        <Col md={5} className='login d-flex justify-content-end'>
                            <i class="fa-solid fa-user"></i> 
                            Đăng Nhập
                        </Col>
                        <Col md={3} className='login d-flex justify-content-end'>
                            <i class="fa-solid fa-user"></i>
                            Đăng Kí
                        </Col>
                    </Row>
                </Col>
            </Navbar>
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