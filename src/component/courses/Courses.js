import React, {Component,Fragment} from 'react';
import {Container, Row, Col,} from "react-bootstrap";
import home from '../../images/balance-work.jpg';

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h2 className='mainServiceTitle'>OUR COURSES</h2>
                    <Row className='courseRowMargin'>
                        <Col lg={6} md={6} sm={12}>
                            <Row className='courseRowMargin'>
                                <Col lg={6} md={6} sm={12} className=''>
                                    <img src={home} className='courseImg'/>
                                </Col>

                                <Col lg={6} md={6} sm={12} className=''>
                                    <h4 className='text-justify courseTitle'>Web Development </h4>
                                    <p className='text-justify courseDescription'> I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a className= 'float-left courseDetails' href='#'>Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row className='courseRowMargin'>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={home} className='courseImg'/>
                                </Col>
                                <Col lg={6} md={6} sm={12} className=''>
                                    <h4 className='text-justify courseTitle'> Web Development</h4>
                                    <p className='text-justify courseDescription'> I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a className='float-left courseDetails' href='#'>Details</a>
                                </Col>
                            </Row>

                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Row className='courseRowMargin'>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={home} className='courseImg'/>
                                </Col>

                                <Col lg={6} md={6} sm={12} className=''>
                                    <h4 className='text-justify courseTitle'>Web Development </h4>
                                    <p className='text-justify courseDescription'> I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a className= 'float-left courseDetails'href='#'>Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row className='courseRowMargin'>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={home} className='courseImg'/>
                                </Col>
                                <Col lg={6} md={6} sm={12} className=''>
                                    <h4 className='text-justify courseTitle'> Web Development</h4>
                                    <p className='text-justify courseDescription'> I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a className= 'float-left courseDetails'href='#'>Details</a>
                                </Col>
                            </Row>

                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default Courses;