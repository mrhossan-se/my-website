import React, {Component, Fragment } from 'react';
import  {Container, Button, Modal, Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Player, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';



class Video extends Component {

    constructor() {
        super();
        this.state={
            show: false
        }
    }

      modalClose=()=>this.setState({show:false})
      modalOpen=()=>this.setState({show:true})

    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <Row>
                       <Col lg={12} md={12} sm={12} className='videoCol'>
                         <div>
                           <h3 className='videoTitle'>How I Do</h3>
                             <p className='videoDescription'>First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful im</p>
                             <p><FontAwesomeIcon icon={faPlayCircle} onClick={this.modalOpen} className='videoBtn' /> </p>
                        </div>
                     </Col>
                   </Row>
                </Container>


                {/*video bottom modal from react bootstrap
               */}
                <Modal size="lg" show={this.state.show} onHide={this.modalClose} animation={false}>
                    <Modal.Body>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton position="center primary" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default Video;