import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '../rating/Rating';
import './productScreen.css'
import data from '../../data'

function ProductScreen(props) {

    const {slug} = useParams();
    const product = data.products.find((x)=> x.slug === slug)
    console.log(product.slug)

    return (
        <section className='productScreen'>
            <Row>
                <Col md={2} className="productScreen_list-category" >
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
                        <div className='productScreen_navigation'>
                            <Link to='/web-books' className='productScreen_link'>Trang Chủ</Link> / 
                            <Link to='/web-books' className='productScreen_link'>Kinh Tế</Link> / 
                            <Link to='/web-books' className='productScreen_link'> Đièu bí ẩn cần giải đáp</Link> 
                        </div>
                    </Row>

                    <Row className='product_wrap-intro'>
                        <Col md={4} className="productScreen_img" >
                            <img src={product.image}></img>
                        </Col>
                        <Col md={7} className="productScreen_intro">
                            <Row className="productScreen_name">{product.name}</Row>
                            <Row className='productScreen_introduce'>{product.introduce}</Row>
                            <Row className='productScreen_intro-container'>
                                <Col md={12} className="productScreen_author">
                                    Tác giả: 
                                    <p>{product.author}</p>
                                </Col>
                                <Col md={12} className='productScreen_price'>{product.price} VND</Col>
                                <Col md={12} className='productScreen_tags'>Tags: Kinh te va xa hoi</Col>
                                <Col className='productScreen_button-cart'> 
                                    <button >Thêm vào giỏ hàng</button>
                                </Col>
                            </Row>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col md={12} className="productScreen_details">Thông tin chi tiết</Col>
                        <Col>
                            <ListGroup className='productScreen_intro-list'>
                                <ListGroupItem className='productScreen_intro-item'>Nhà xuất bản:  <a>Sonncode01</a></ListGroupItem>
                                <ListGroupItem className='productScreen_intro-item'>Ngày sản xuất: 16/02/2023</ListGroupItem>
                                <ListGroupItem className='productScreen_intro-item'>Nhà phát hành: <a>Sonncode01</a> </ListGroupItem>
                                <ListGroupItem className='productScreen_intro-item'>Kích thước: 17.0 x 24.0 1.0 </ListGroupItem>
                                <ListGroupItem className='productScreen_intro-item'>Số trang: 128 </ListGroupItem>
                                <ListGroupItem className='productScreen_intro-item'>Trọng lượng: 350gram</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} className="productScreen_type">Sản phẩm cùng loại</Col>
                        <Col md={12}>
                            <Row>
                                <Col md={2} className="productScreen_list-type">
                                    <img src="https://sachweb.com/Upload/sach/mayvahethongdieukhienso.jpg" />
                                </Col>
                                <Col md={2} className="productScreen_list-type">
                                    <img src="https://sachweb.com/Upload/sach/mayvahethongdieukhienso.jpg" />
                                </Col>
                                <Col md={2} className="productScreen_list-type">
                                    <img src="https://sachweb.com/Upload/sach/mayvahethongdieukhienso.jpg" />
                                </Col>
                                <Col md={2} className="productScreen_list-type">
                                    <img src="https://sachweb.com/Upload/sach/mayvahethongdieukhienso.jpg" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='product_review'>
                        <Col md={12} className="productScreen_review-title">NHẬN XÉT CỦA KHÁCH HÀNG</Col>
                        <Col md={12} className="productScreen_review-rating">Đánh giá: <Rating rating={product.rating} numReview={product.numberReviews}/> </Col>
                        <Row>
                            <Col md={12} className="productScreen_review-comment">Bình luận</Col>
                            <Col className="productScreen_review-input">
                                <input type="text" placeholder='Viết bình luận của bạn ...' />
                            </Col>
                            <Col md={12} className="productScreen_review-footer">Hiện chưa có bình luận nào</Col>
                        </Row>
                    </Row>
                </Col>

                <Col>
                    <Row>
                    <Col className='productScreen_contact'>
                            <h5>Thông tin & khuyến mãi</h5>
                            <p>- Đổi trả hàng trong vòng 7 ngày</p>
                            <p>- Được kiểm tra hàng trước khi thanh toán(COD)</p>
                            <p>- Đối với khách hành thanh toán bằng hình thức chuyển khoản vui lòng ghi nội dung chuyển khoản là sdt của bạn. Chúng tôi sẽ liên hệ ngay với bạn để xác nhận lại</p>
                            <p>- Mọi thắc mắc xin liên hệ qua: (+84) 123456789</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='productScreen_footer'>
                Build by <a href='https://github.com/Sonn01coder'>Sonncoder01</a>base on Reactjs
            </Row>
        </section>
    );
}

export default ProductScreen;