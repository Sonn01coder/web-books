import React from 'react';
import { Col, Container, Row, Navbar } from 'react-bootstrap';
import background1 from "../../asset/img/bg1.png"
import "./navi.css"


function Navi(props) {
    return (
        <Container class="fixed-top navi_container">
            <Navbar >
                <Col md="8"></Col>
                <Col md="2">Dang ki</Col>
                <Col md="2">Dang nhap</Col>
            </Navbar>
            <Row className='navi_wrap'>
                <Col>Một cuốn sách là một giấc mơ mà bạn cầm trong tay</Col>
                <Col>
                    <h1>Tìm cuốn sách của riêng bạn</h1>
                    <div>
                        <input type="text" placeholder="Tìm kiếm tại đây..." />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div>
                        {/* <img src={background1} alt="Background1"/> */}
                    </div>
                </Col>  
            </Row>
        </Container>
    );
}

export default Navi;