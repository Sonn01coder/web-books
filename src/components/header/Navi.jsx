import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row, Navbar, InputGroup, FormControl, Form } from 'react-bootstrap';
import background1 from "../../asset/img/bg1.png"
import "./navi.css"


function Navi(props) {
    return (
        <Container className="navi_container">
            <Navbar>
                <Col md={9}></Col>
                <Col md={3}>
                    <Row className='d-flex justify-content-end'>
                        <Col md={2} className='login'><i class="fa-solid fa-cart-shopping"></i></Col>
                        <Col md={6} className='login'>Đăng Nhập</Col>
                        <Col md={4} className='login'>Đăng Kí</Col>
                    </Row>
                </Col>
            </Navbar>
            <Row className='navi_wrap'>
                <Col md={8} className='navi_sologan'>Một cuốn sách là một giấc mơ mà bạn cầm trong tay</Col>
                <Col md={4} className='navi_search'>
                    <h2>Tìm cuốn sách của riêng bạn</h2>
                    <InputGroup className='navi_input'>
                        <FormControl placeholder="Tìm kiếm tại đây..." />
                        <InputGroup.Text><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                    </InputGroup>
                    <div>
                        <img src={background1} alt="Background1" className='navi_img'/>
                    </div>
                </Col>  
            </Row>
        </Container>
    );
}

export default Navi;