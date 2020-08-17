import React, {Component, Fragment} from 'react';
import  {Container,Button, Row, Col, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContractSection extends Component {
    render() {
        return (
            <Fragment >
                <Container className='mt-5'>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1>Discus Now</h1>
                            <Form>
                                <Form.Group >
                                    <Form.Group >
                                        <Form.Label className='serviceDescription'>Name</Form.Label>
                                        <Form.Control type="name" />
                                    </Form.Group>
                                    <Form.Label className='serviceDescription'>Email address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label className='serviceDescription'>Your textarea</Form.Label>
                                    <Form.Control as="textarea" />
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12} className='contractSection text-justify mt-5'>
                            <h1>Contract Now</h1>
                            <h5 className='footerSubTitle'>Address</h5>
                            <p className=' footerLink'> Resingeplan 19, lgh 001, 163 64, Stockholm, Sweden</p>
                            <a style={{fontSize: '12px'}} className='footerLink' href='#'>  <FontAwesomeIcon icon={faEnvelope}  />Email: mrhossan1988@gmail.com </a>
                            <p className='footerLink'> <FontAwesomeIcon icon={faPhone}  /> +46 727890687</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContractSection;