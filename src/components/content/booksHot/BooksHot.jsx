import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './booksHot.css'
import sliderImg from '../../../asset/img/imgBooks.jpg'
import data from '../../../data'

function BooksHot(props) {
    const listBooksHot = data.products.filter(product => {
        return product.booksHot === true
    })

    console.log(listBooksHot)
    return (
        <div className='booksHot'>
            <Container>
                <Row>
                    <Col className='booksHot_title'>MỌI NGƯỜI ĐỀU ĐỌC</Col>
                </Row>
                <Row className='booksHot_wrap'>
                        {
                            listBooksHot.map(product => (
                                <Col md={3} sm={6} xs={12}>
                                    <div className='booksHot_container'>
                                        <div className='booksHot_item'>
                                            <div className='booksHot_wrap'>
                                                <div className='booksHot_img'>
                                                    <img src={product.image} alt="books" />
                                                </div>
                                                <div className='booksHot_intro'>
                                                    <p>{product.name}</p>
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
                                                    <span className='booksHot_price'>Gia {product.price}VND</span>
                                                </div>
                                            </div>
                                            <button className='booksHot_btn-add'>
                                                <p>Mua ngay</p>
                                                <i class="fa-solid fa-cart-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                </Row>
                <Row>
                    <Col md={12} className="booksHot_more d-flex justify-content-center">
                        <div className='booksHot_text'>Xem Thêm</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BooksHot;