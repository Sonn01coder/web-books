import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './headerNavi.css'
import logo from "../../asset/img/logo.png"
import { Link } from 'react-router-dom';

function HeaderNav(props) {
    return (
        <div className='headerNav'>
            <Row className='headerNav_container' >
                <Col md={2} className="logo">
                    <Link to="/web-books">
                        <img src={logo} alt="logo"/>
                    </Link>
                </Col>
                <Col md={7} className="headerNav_nav"></Col>
                <Col md={3} >
                    <Row className='d-flex justify-content-end align-items-center header-height-max'>
                        <Col md={3} className='header_cart '>
                            <Link to="/cart" >
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>4</span>
                            </Link>
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