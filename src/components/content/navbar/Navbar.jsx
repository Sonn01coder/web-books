import React, { useRef } from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import "./Navbar.css"
import data from '../../../data'
import { SmoothHorizontalScrolling } from '../../utils';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const sliderRef = useRef()
    const movieRef = useRef()

    const proposeItem =data.products.filter(product => {
        return product.propose === true
    })

    const handleScrollRight = () => {
        const maxScrollLeft =  sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        console.log(maxScrollLeft)
        if(sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(sliderRef.current,
                280,
                movieRef.current.clientWidth,
                sliderRef.current.scrollLeft)
        }
    }

    const handleScrollLeft = () => {
        const maxScrollLeft =  sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        console.log(maxScrollLeft)
        if(sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(sliderRef.current,
                280,
                -movieRef.current.clientWidth,
                sliderRef.current.scrollLeft)
        }
    }

    return (
        <section className='slider'>
            <Row>
                <Col md={2} >
                    <p className='slide_title'>DANH MỤC EBOOk</p>
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

                <Col md={10}>
                    <Row className='slide_info'>
                        <Col md={3}>
                            <div className="slide_info-wrap">
                               <div className="slide_info-title">
                                    <i class="fa-solid fa-gift"></i>
                                    <p>ĐA NỀN TẢNG</p>
                               </div>
                               <div className="slide_info-content">
                                    <p>Ebook có thể sử dụng trên hầu hết các thiết bị gồm laptop, máy tính bảng, điện thoại...</p>
                               </div>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="slide_info-wrap">
                               <div className="slide_info-title">
                                    <i class="fa-sharp fa-solid fa-book"></i>
                                    <p>SÁCH BẢN QUYỀN</p>
                               </div>
                               <div className="slide_info-content">
                                    <p>Hàng nghìn tựa sách hay với đầy đủ bản quyền.</p>
                               </div>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="slide_info-wrap">
                               <div className="slide_info-title">
                                    <i class="fa-solid fa-truck"></i>
                                    <p>THANH TOÁN TRỰC TUYẾN</p>
                               </div>
                               <div className="slide_info-content">
                                    <p>Hỗ trợ thanh toán trực tuyến bao gồm thẻ quốc tế lẫn ATM nội địa...</p>
                               </div>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="slide_info-wrap">
                               <div className="slide_info-title">
                                    <i class="fa-solid fa-phone"></i>
                                    <p>HỖ TRỢ</p>
                               </div>
                               <div className="slide_info-content">
                                    <p>ĐT: (028) 28 288 288  Email:monne2310@gmail.com</p>
                               </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="slide_suggest">
                        <Col md={12} className="slide_suggest-title" >ĐỀ XUẤT DÀNH CHO BẠN</Col>
                        <Col md={2}></Col>
                        <Col md={7} className="slide_suggest-slogan">Biết bao kẻ đọc sách và học hỏi, không phải để tìm ra chân lý mà là để gia tăng những gì mình đã biết.(Junline Green)</Col>
                    </Row>

                    <Row className='suggest_list'>
                        <div className='suggest_item-container' ref={sliderRef}>
                            {
                                proposeItem.map(product => (
                                <div>
                                    <div className='suggest_item' ref={movieRef}>
                                        <Link to={`/product/${product.slug}`}>
                                            <img src={product.image} alt={product.slug}/>
                                            <p>{product.name}</p>
                                        </Link>
                                    </div>
                                </div>
                                ))
                            }
                        </div>
                        <div className='suggest_btn-left' onClick={handleScrollLeft}><i class="fa-solid fa-chevron-left"></i></div>
                        <div className='suggest_btn-right' onClick={handleScrollRight}><i class="fa-solid fa-chevron-right"></i></div>
                    </Row>
                </Col>
            </Row>
        </section>
    );
}

export default Navbar;