import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './cart.css'

function Cart(props) {
    return (
        <Container className='cart'>
            <Row>
                <Col md={12}>
                    <p>GIỎ HÀNG</p>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col md={7}>Sản phẩm</Col>
                        <Col md={2}>Số lượng</Col>
                        <Col md={2}>Giá thành</Col>
                    </Row>
                    <Row>
                        <Col md={7}>Sản phẩm</Col>
                        <Col md={2}>Số lượng</Col>
                        <Col md={2}>Giá thành</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;