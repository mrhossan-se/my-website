import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faLinkedin, } from '@fortawesome/free-brands-svg-icons'


class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='footerSection text-center'>
                    <Row>
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h5 className='footerSubTitle'>Follow Me</h5>
                            <a className='footerSocialLink' href='#'> <FontAwesomeIcon icon={faFacebook} /> Facebook </a><br/>
                            <a  className='footerSocialLink' href='#'> <FontAwesomeIcon icon={faLinkedin} /> Linkedin </a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h5 className='footerSubTitle'>Address</h5>
                            <p className=' footerLink'> Resingeplan 19, lgh 001, 163 64, Stockholm, Sweden</p>
                            <a style={{fontSize: '12px'}} className='footerLink' href='#'>  <FontAwesomeIcon icon={faEnvelope}  />Email: mrhossan1988@gmail.com </a>
                            <p className='footerLink'> <FontAwesomeIcon icon={faPhone}  /> +46 727890687</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h5 className='footerSubTitle'>Information</h5>
                            <a className='footerLink' href='#'>About Me</a><br/>
                            <a className='footerLink' href='#'>My Resume</a><br/>
                            <a className='footerLink' href='#'>Contact Me</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h5 className='footerSubTitle'>Legal</h5>
                            <a className='footerLink' href='#'>Refund Policy</a><br/>
                            <a className='footerLink' href='#'>Terms And Condition</a><br/>
                            <a className='footerLink' href='#'>Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className='text-center copyWriteFooter'>
                    <a  href='#' className=' copyWriteFooterLink'> Copy Write Mr Hossan 2020  </a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;