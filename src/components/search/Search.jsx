import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';
import "./search.css"

function Search(props) {
    return (
        <section className='search'>
            <Row>
                <Col md={2} className="search_list-category" >
                    <p className='slide_title '>DANH MỤC BOOK</p>
                    <ListGroup className='slide_list'>
                        <ListGroupItem className='slide_item' >Kinh tế</ListGroupItem>
                        <ListGroupItem className='slide_item' >Từ điển</ListGroupItem>
                        <ListGroupItem className='slide_item' >Văn hóa xã hội </ListGroupItem>
                        <ListGroupItem className='slide_item' >Lịch sử truyền thống</ListGroupItem>
                        <ListGroupItem className='slide_item' >Sức khỏe và cuộc sống</ListGroupItem>
                        <ListGroupItem className='slide_item' >Ngoại ngữ</ListGroupItem>
                        <ListGroupItem className='slide_item' >Thiếu nhi</ListGroupItem>
                        <ListGroupItem className='slide_item' >Giáo trình</ListGroupItem>
                        <ListGroupItem className='slide_item' >Văn học</ListGroupItem>
                        <ListGroupItem className='slide_item' >Sách trọn bộ</ListGroupItem>
                        <ListGroupItem className='slide_item' >Tiểu thuyết</ListGroupItem>
                        <ListGroupItem className='slide_item' >Ebook khác</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={7}>
                    <Row>
                        <div className='search_navigation'>
                            <Link to='/web-books' className='search_link'>Trang Chủ</Link> / 
                            <Link to='/web-books' className='search_link'>Tìm kiếm</Link> /
                            <Link to='/web-books' className='search_link'>name</Link> 
                        </div>
                    </Row>
                    <Row>
                        <Col md={12}>Kết quả tìm kiếm của bạn: </Col>
                        <Col md={12}>
                            <div className='searchProduct_container'>
                                <div className='searchProduct_item'>
                                    <div className='searchProduct_wrap'>
                                        <Link  className='searchProduct_img'>
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4T4mF8LbjmZyLa3EFEjItM0hpuIZ3--6z6g&usqp=CAU' alt="books" />
                                        </Link>
                                        <div className='searchProduct_intro'>
                                            <Link >nammmmmmm mmm mmm</Link>
                                            <Rating rating={5} numReview={14} />
                                            <span className='searchProduct_price'>Giá: 199VND</span>
                                        </div>
                                    </div>
                                    <button className='searchProduct_btn-add'>
                                        <p>Mua ngay</p>
                                        <i class="fa-solid fa-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
}

export default Search;