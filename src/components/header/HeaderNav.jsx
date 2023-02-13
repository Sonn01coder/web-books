import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './headerNavi.css'
import logo from "../../asset/img/logoPng.png"
import { Link } from 'react-router-dom';

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
                            <Link to='/login' className='login_wrap-link'>
                                <i class="fa-solid fa-user"></i> 
                                <span>Đăng Nhập</span>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default HeaderNav;