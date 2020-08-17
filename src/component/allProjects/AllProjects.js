import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import home from "../../images/balance-work.jpg";

class AllProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center recentProjectsContainer -mt-5'>
                    <Row>
                        <Col lg={4} md={6} sm={12} >
                            <Card className='recentProjectsCard'>
                                <Card.Img variant="top" src={home}  className='recentCardImg' />
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Card Title</Card.Title>
                                    <Card.Text className="projectsCards">
                                        Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12} >
                            <Card className='recentProjectsCard' >
                                <Card.Img variant="top" src={home} className='recentCardImg' />
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Card Title</Card.Title>
                                    <Card.Text className="projectsCards">
                                        Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col lg={4} md={6} sm={12} >
                            <Card className='recentProjectsCard'>
                                <Card.Img variant="top" src={home} className='recentCardImg'/>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Card Title</Card.Title>
                                    <Card.Text className="projectsCards">
                                        Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} >
                            <Card className='recentProjectsCard'>
                                <Card.Img variant="top" src={home} className='recentCardImg'/>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Card Title</Card.Title>
                                    <Card.Text className="projectsCards">
                                        Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} >
                            <Card className='recentProjectsCard'>
                                <Card.Img variant="top" src={home} className='recentCardImg'/>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Card Title</Card.Title>
                                    <Card.Text className="projectsCards">
                                        Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} >
                            <Card className='recentProjectsCard'>
                                <Card.Img variant="top" src={home} className='recentCardImg'/>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Card Title</Card.Title>
                                    <Card.Text className="projectsCards">
                                        Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllProjects;