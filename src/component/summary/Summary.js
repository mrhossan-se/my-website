import React, {Component, Fragment} from 'react';
import  {Card, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";



class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container  fluid={true}  className="summaryBanner summarySection ">
                    <div className="summaryBannerOverlay ">
                        <Container className='text-center'>
                            <Row>
                                <Col  lg={8} md={6} sm={12}>
                                    <Row className='summaryCountSection'>
                                        <Col>
                                            <h1 className='summaryCountNumber'>

                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>

                                            </h1>
                                            <h4 className='summaryCountTitle'>Total Projects</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>

                                        <Col >
                                            <h1 className='summaryCountNumber'>

                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className='summaryCountTitle'>Total Clients</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                    </Row>

                                </Col>

                                <Col lg={4} md={6} sm={12}>
                                    <Card className='summaryCardsSection'>
                                        <Card.Body>
                                            <Card.Title className='summaryCardTitle text-justify'>How i Work</Card.Title>
                                            <Card.Text>
                                                <p className='summarySubTitle text-justify'> <FontAwesomeIcon icon={faCheckCircle} className='summaryIconBullet' />Requirement Gathering </p>
                                                <p className='summarySubTitle text-justify'> <FontAwesomeIcon icon={faCheckCircle} className='summaryIconBullet' />System Analysis </p>
                                                <p className='summarySubTitle text-justify'> <FontAwesomeIcon icon={faCheckCircle} className='summaryIconBullet' />Coding Testing </p>
                                                <p className='summarySubTitle text-justify'> <FontAwesomeIcon icon={faCheckCircle} className='summaryIconBullet' />Implementation </p>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;