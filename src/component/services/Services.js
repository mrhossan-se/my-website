import React, {Component, Fragment} from 'react';
import website from '../../images/website-design.png';
import mobile from '../../images/mobile.png';
import graphics from '../../images/victoria.png'
import  {Row, Col,Container} from "react-bootstrap";

class Services extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="text-center mainServiceTitle">MY SERVICES</h1>
                <Container>
                <Row>
                    <Col  lg={4} md={6} sm={12}>
                   <div className='serviceCard text-center'>
                       <img className='servicesImg' style={{width: "100px", height: "100px"}} src={website} alt="website"/>
                       <h2 className='serviceName'>Web Development</h2>
                       <p className=''>I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>

                   </div>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <div className='serviceCard text-center'>
                            <img className='servicesImg' style={{width: "100px", height: "100px"}} src={mobile} alt="mobile"/>
                            <h2 className='serviceName'>Mobile Development</h2>
                            <p className='serviceDescription'>I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>

                        </div>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <div className='serviceCard text-center'>
                            <img className='servicesImg' style={{width: "100px", height: "100px"}} src={graphics} alt="graphics"/>
                            <h2 className='serviceName'>Graphics Design</h2>
                            <p className='serviceDescription'>I desing modern user interface and other graphical components for your business and instiution.</p>

                        </div>
                    </Col>
                 </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;
