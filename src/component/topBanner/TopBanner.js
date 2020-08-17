import React, {Component, Fragment} from 'react';
import '../../css/Custom.css'
import '../../css/bootstrap-link.css'
import  {Container,Row, Col,Button} from "react-bootstrap";

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}  className="topFixedBanner p-0">
                    <div className="topFixedOverlay">
                        <Container className="topBanner">
                            <Row>
                                <Col className='text-center'>
                                   <h1 className='top-title'>WEB APPLICATION DEVELOPMENT</h1>
                                   <h5  className="sub-title">Mobile & Web Application D</h5>
                                   <Button variant="primary">More info</Button>

                                </Col>
                            </Row>
                        </Container>

                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;