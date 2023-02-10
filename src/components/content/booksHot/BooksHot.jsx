import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './booksHot.css'
import sliderImg from '../../../asset/img/imgBooks.jpg'

function BooksHot(props) {
    return (
        <div className='booksHot'>
            <Container>
                <Row>
                    <Col className='booksHot_title'>MỌI NGƯỜI ĐỀU ĐỌC</Col>
                </Row>
                <Row>
                    <Col md={3} sm={6} xs={12}>
                        <div className='booksHot_container'>
                            <div className='booksHot_item'>
                                <div className='booksHot_wrap'>
                                    <div className='booksHot_img'>
                                        <img src={sliderImg} alt="books" />
                                    </div>
                                    <div className='booksHot_intro'>
                                        <p>Tuổi trẻ đáng bao nhiêu</p>
                                        <div className='booksHot_intro-context'>
                                            <span className='booksHot_rating'>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                            <span className='booksHot_sold'>Đã bán 50</span>
                                        </div>
                                        <span className='booksHot_price'>Gia 99VND</span>
                                    </div>
                                </div>
                                <button className='booksHot_btn-add'>
                                    <p>Mua ngay</p>
                                    <i class="fa-solid fa-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BooksHot;