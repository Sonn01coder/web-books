import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css'

function Footer(props) {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='footer_wrap'>
                            <p> Build by <a href='https://github.com/Sonn01coder'>Sonncoder01</a> base on Reactjs</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;