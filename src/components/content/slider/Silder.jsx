import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import "./slider.css"
import imgBook from "../../../asset/img/imgBooks.jpg"

function Silder(props) {
    return (
        <section className='slider'>
            <Row>
                <Col md={2} >
                    <p className='slide_title'>DANH MỤC EBOOk</p>
                    <ListGroup className='slide_list'>
                        <ListGroupItem className='slide_item' >Kinh tế</ListGroupItem>
                        <ListGroupItem className='slide_item' >Từ điển</ListGroupItem>
                        <ListGroupItem className='slide_item' >Văn hóa và xã </ListGroupItem>
                        <ListGroupItem className='slide_item' >Lịch sử truyền thóng</ListGroupItem>
                        <ListGroupItem className='slide_item' >Sức khỏe và cuộc sống</ListGroupItem>
                        <ListGroupItem className='slide_item' >Ngoại </ListGroupItem>
                        <ListGroupItem className='slide_item' >Thiếu nhi</ListGroupItem>
                        <ListGroupItem className='slide_item' >Giáo trình</ListGroupItem>
                        <ListGroupItem className='slide_item' >Văn học</ListGroupItem>
                        <ListGroupItem className='slide_item' >Sách trọn bộ</ListGroupItem>
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
                                    <p>ĐT: (028) 28 288 288  Email:tonghop@nxbhcm.com.vn</p>
                               </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>ĐỀ XUẤT DÀNH BẠN</Col>
                        <Col md={12}><i class="fa-thin fa-equals"></i></Col>
                        <Col md={12}>Biết bao kẻ đọc sách và học hỏi, không phải để tìm ra chân lý mà là để gia tăng những gì mình đã biết.(Junline Green)</Col>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <div>
                                <img src={imgBook} alt="img"/>
                                <p>Tuổi trẻ đáng bao nhiêu</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
}

export default Silder;