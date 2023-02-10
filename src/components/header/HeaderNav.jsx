import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './headerNavi.css'

function HeaderNav(props) {
    return (
        <div className='headerNav'>
            <Row className='headerNav_container' >
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
            </Row>
        </div>
    );
}

export default HeaderNav;