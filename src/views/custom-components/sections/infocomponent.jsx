/* eslint-disable */
// The cards attached to banner
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import School from '../../../assets/images/wisImg/school.jpg';

const InfoComponent = () => {
    return (
        <div>
            <div className="mini-spacer feature4" style={{marginTop:"-150px"}}>
                <Container>
                    <Row className="m-t-40">
                        <Col md="4" className="wrap-feature4-box">
                            <Card className="card-2">
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-graduation-cap"></i></div>
                                    <h5 className="font-medium text-white">Qualified Teachers</h5>
                                    <p className="m-t-20 text-white">Our team consisits of Qualified teachers</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" className="wrap-feature4-box">
                            <Card className="card-1 text-white">
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-certificate"></i></div>
                                    <h5 className="font-medium text-white">Certification</h5>
                                    <p className="m-t-20 text-white">Recognized certificates on Completion of Specific courses</p>
                                   
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" className="wrap-feature4-box">
                            <Card className="card-2">
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="sl-icon-book-open"></i></div>
                                    <h5 className="font-medium text-white">Online Education </h5>
                                    <p className="m-t-20 text-white">Anyone can join to our Online classes conducted via Zoom</p>   
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">We help you to Find the best Classes for You</h1>
                            <h6 className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante purus</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <div className="spacer ">
                <Container className="feature30">
                    <Row>
                        <Col lg="10">
                            <Card>
                            <CardBody>
                                    <div className="p-20">
                                        <span className="label label-info label-rounded">Feature 3</span>
                                        <h3 className="title">The New way of Making Your Website in mins</h3>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience. You will love it for sure.</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="5" md="7" className="text-center wrap-feature30-box">
                            <Card className="card-shadow">
                                <img src={School} className="rounded img-responsive" alt="wrappixel" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div> */}
        </div>
    );
}

export default InfoComponent;