import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './cart.css'

function Cart(props) {
    return (
        <Container className='cart'>
            <Row className='cart_container'>
                <Col md={12} >
                    <p className='cart_title'>GIỎ HÀNG CỦA TÔI</p>
                </Col>
                <Col md={8} className='cart_wrap'>
                    <Row className='cart_wrap-header'>
                        <Col md={7} className="d-flex justify-content-center">Sản phẩm</Col>
                        <Col md={2} className="d-flex justify-content-center">Số lượng</Col>
                        <Col md={2} className="d-flex justify-content-center">Giá thành</Col>
                    </Row>
                    <Row  className='cart_list'>
                        <Col md={12} className='cart_item'>
                            <Row>
                                <Col md={7}>
                                    <Row className='cart_item-product'>
                                        <Col md={3}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBstXAmkzVK-Ze6Lg_gZMVl57-7Oyvpw6QA&usqp=CAU" /></Col>
                                        <Col>Book name is ....</Col>
                                    </Row>
                                </Col>
                                <Col md={2} className='d-flex justify-content-around cart_item-countProduct'>
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <p>6</p>
                                    <i class="fa-solid fa-circle-plus"></i>
                                </Col>
                                <Col md={2} className="d-flex justify-content-center cart_item-price">199 VND</Col>
                                                            <Col className='cart_remove'><i class="fa-solid fa-trash"></i></Col>    
                            </Row>
                        </Col>
                        <Col md={12} className='cart_item'>
                            <Row>
                                <Col md={7}>
                                    <Row className='cart_item-product'>
                                        <Col md={3}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBstXAmkzVK-Ze6Lg_gZMVl57-7Oyvpw6QA&usqp=CAU" /></Col>
                                        <Col>Book name is ....</Col>
                                    </Row>
                                </Col>
                                <Col md={2} className='d-flex justify-content-around cart_item-countProduct'>
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <p>6</p>
                                    <i class="fa-solid fa-circle-plus"></i>
                                </Col>
                                <Col md={2} className="d-flex justify-content-center cart_item-price">199 VND</Col>
                                <Col className='cart_remove'><i class="fa-solid fa-trash"></i></Col>    
                            </Row>
                        </Col>
                        <Col md={12} className='cart_item'>
                            <Row>
                                <Col md={7}>
                                    <Row className='cart_item-product'>
                                        <Col md={3}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBstXAmkzVK-Ze6Lg_gZMVl57-7Oyvpw6QA&usqp=CAU" /></Col>
                                        <Col>Book name is ....</Col>
                                    </Row>
                                </Col>
                                <Col md={2} className='d-flex justify-content-around cart_item-countProduct'>
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <p>6</p>
                                    <i class="fa-solid fa-circle-plus"></i>
                                </Col>
                                <Col md={2} className="d-flex justify-content-center cart_item-price">199 VND</Col>
                                <Col className='cart_remove'><i class="fa-solid fa-trash"></i></Col>    
                            </Row>
                        </Col>
                        <Col md={12} className='cart_item'>
                            <Row>
                                <Col md={7}>
                                    <Row className='cart_item-product'>
                                        <Col md={3}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBstXAmkzVK-Ze6Lg_gZMVl57-7Oyvpw6QA&usqp=CAU" /></Col>
                                        <Col>Book name is ....</Col>
                                    </Row>
                                </Col>
                                <Col md={2} className='d-flex justify-content-around cart_item-countProduct'>
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <p>6</p>
                                    <i class="fa-solid fa-circle-plus"></i>
                                </Col>
                                <Col md={2} className="d-flex justify-content-center cart_item-price">199 VND</Col>
                                <Col className='cart_remove'><i class="fa-solid fa-trash"></i></Col>    
                            </Row>
                        </Col>
                        <Col md={12} className='cart_item'>
                            <Row>
                                <Col md={7}>
                                    <Row className='cart_item-product'>
                                        <Col md={3}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBstXAmkzVK-Ze6Lg_gZMVl57-7Oyvpw6QA&usqp=CAU" /></Col>
                                        <Col>Book name is ....</Col>
                                    </Row>
                                </Col>
                                <Col md={2} className='d-flex justify-content-around cart_item-countProduct'>
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <p>6</p>
                                    <i class="fa-solid fa-circle-plus"></i>
                                </Col>
                                <Col md={2} className="d-flex justify-content-center cart_item-price">199 VND</Col>
                                <Col className='cart_remove'><i class="fa-solid fa-trash"></i></Col>    
                            </Row>
                        </Col>
                    </Row>

                    
                </Col>
                <Col>
                    <Row className='cart_voucher'>
                        <Col md={12} className="cart_voucher-title">
                            Áp dụng mã giảm giá của riêng bạn
                        </Col>
                        <Col md={12} className="cart_voucher-input">
                            <input type="radio" name="checkVoucher" value=""/>
                            <label>{"Giảm ngay 5% cho toàn bộ đơn hàng"}</label>
                        </Col>
                        <Col md={12} className="cart_voucher-input">
                            <input type="radio" name="checkVoucher" value=""/>
                            <label>{"Giảm ngay 25k cho toàn bộ đơn hàng"}</label>
                        </Col>
                        <Col md={12} className="cart_voucher-input">
                            <input type="radio" name="checkVoucher" value=""/>
                            <label>{"Freeship cho đơn hàng của bạn"}</label>
                        </Col>

                        <Col md={12} className="cart_payment-wrap">
                            <Row className='cart_payment'>
                                <Col md={6}>Tổng đơn hàng:</Col>
                                <Col md={6} className="cart_payment-money">4000 VND</Col>
                            </Row>
                            <Row className='cart_payment'>
                                <Col md={6}>Phí ship:</Col>
                                <Col md={6} className="cart_payment-money">30 VND</Col>
                            </Row>
                            <Row className='cart_payment cart_payment-init'>
                                <Col md={6}>TThành tiền:</Col>
                                <Col md={6} className="cart_payment-money ">4000 VND</Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='cart_payment-btn'>
                        <button >Thanh toán ngay</button>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;