import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './headerNavi.css'
import logo from "../../asset/img/logoPng.png"

function HeaderNav(props) {
    return (
        <div className='headerNav'>
            <Row className='headerNav_container' >
                <Col md={2}>
                    <img src={logo} className="logo"/>
                </Col>
                <Col md={7} className="headerNav_nav"></Col>
                <Col md={3} >
                    <Row className='d-flex justify-content-end align-items-center'>
                        <Col md={3} className='login '>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span>4</span>
                        </Col>
                        <Col md={6} className='login'>
                            <i class="fa-solid fa-user"></i> 
                            Đăng Nhập
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default HeaderNav;