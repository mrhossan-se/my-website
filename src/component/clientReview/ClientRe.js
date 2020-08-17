import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Container,Row ,Col} from "react-bootstrap";
import home from '../../images/balance-work.jpg';

class ClientReview extends Component {
    render() {

        let settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            vertical: true,
            verticalSwiping: true,
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <Fragment>
              <Container className='text-center'>
                  <h2 className='mainServiceTitle'>CLIENT SAYS</h2>
                  <Slider {...settings}>
                      <div>
                          <Row className='text-center justify-content-center'>
                              <Col lg={6} md={6} sm={12}>
                                  <img src={home} className='clientImgCircle'/>
                                  <h3 className='text-center '>Client Name</h3>
                                  <p className='clientReviewDis'>Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
                                   <hr style={{width: '30%'}}/>
                              </Col>
                          </Row>
                      </div>
                      <div>
                          <Row className='text-center justify-content-center'>
                              <Col lg={6} md={6} sm={12}>
                                  <img src={home} className='clientImgCircle'/>
                                  <h3 className='text-center '>Web Development</h3>
                                  <p className=' clientReviewDis'>Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
                                  <hr style={{width: '30%'}} />
                              </Col>
                          </Row>
                      </div>
                      <div>
                          <Row className='text-center justify-content-center'>
                              <Col lg={6} md={6} sm={12}>
                                  <img src={home} className='clientImgCircle'/>
                                  <h3 className='text-center '>Web Development</h3>
                                  <p className=' clientReviewDis'>Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
                                  <hr style={{width: '30%'}} />
                              </Col>
                          </Row>
                      </div>
                      <div>
                          <Row className='text-center justify-content-center'>
                              <Col lg={6} md={6} sm={12}>
                                  <img src={home} className='clientImgCircle'/>
                                  <h3 className='text-center '>Client Name</h3>
                                  <p className='clientReviewDis'>Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
                                 <hr style={{width: '30%'}} />
                              </Col>
                          </Row>
                      </div>
                  </Slider>
              </Container>
            </Fragment>
        );
    }
}

export default ClientReview;