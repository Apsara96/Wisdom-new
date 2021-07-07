/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Button, Card, CardBody, CardTitle, CardText, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup } from 'reactstrap';

import img1 from '../../../assets/images/features/feature13/img1.jpg';
import img2 from '../../../assets/images/features/feature13/img2.jpg';
import img3 from '../../../assets/images/features/feature13/img3.jpg';
import img4 from '../../../assets/images/features/feature13/img4.jpg';
import img5 from '../../../assets/images/features/feature30/img1.jpg';

const FeatureComponent = () => {
    return (
        <div>
            <div className="mini-spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Find Your Class</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer feature4">
                <Container>
                    <Row className="m-t-40">
                        <Col md="3" className="wrap-feature4-box">
                            <Card className="card-light">
                                <CardBody>
                                    <h4 className="font-medium">Search Class</h4>
                                    <div className="btndropdown">
                                        <ButtonGroup>{' '}
                                            <UncontrolledDropdown setActiveFromChild>
                                                <DropdownToggle tag="button" className="btn btn-light" caret style={{ width: "200px" }}>
                                                    Select the Grade
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem tag="a" href="/blah">Link</DropdownItem>
                                                    <DropdownItem tag="a" href="/blah">Link 1</DropdownItem>
                                                    <DropdownItem tag="a" href="/blah">Link 2</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ButtonGroup>
                                    </div>
                                    <div className="btndropdown">
                                        <ButtonGroup>{' '}
                                            <UncontrolledDropdown setActiveFromChild>
                                                <DropdownToggle tag="button" className="btn btn-light" caret style={{ width: "200px" }}>
                                                    Select Subject
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem tag="a" href="/blah">Link</DropdownItem>
                                                    <DropdownItem tag="a" href="/blah">Link 1</DropdownItem>
                                                    <DropdownItem tag="a" href="/blah">Link 2</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ButtonGroup>
                                    </div>
                                    <Button color="primary">Search</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="9" className="wrap-feature4-box">
                            <div>
                                <Row className="text-white">
                                    <Col md="4" className="wrap-feature4-box">
                                        <Card body className="card-dark">
                                            <CardTitle>Grade <br /> 1-4</CardTitle>
                                        </Card>
                                    </Col>
                                    <Col md="4" className="wrap-feature4-box">
                                        <Card body className="card-dark">
                                            <CardTitle>Grade 5<br /> Scholarship</CardTitle>
                                        </Card>
                                    </Col>
                                    <Col md="4" className="wrap-feature4-box">
                                        <Card body className="card-dark">
                                            <CardTitle>Grade <br /> 6-9</CardTitle>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="text-white">
                                    <Col md="4" className="wrap-feature4-box">
                                        <Card body className="card-dark">
                                            <CardTitle>Ordinary <br /> Level</CardTitle>
                                        </Card>
                                    </Col>
                                    <Col md="4" className="wrap-feature4-box">
                                        <Card body className="card-dark">
                                            <CardTitle>Advanced <br /> Level</CardTitle>
                                        </Card>
                                    </Col>
                                    <Col md="4" className="wrap-feature4-box">
                                        <Card body className="card-dark">
                                            <CardTitle>Language <br /> Classes</CardTitle>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <div className="bg-light spacer feature20 up">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <span className="label label-success label-rounded">Feature 2</span>
                            <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
                            <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                        </Col>
                    </Row>
                    <Row className="wrap-feature-20">
                        <Col lg="6">
                            <Card>
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20"><img src={img1} width="70" className="rounded" alt="img" /></div>
                                            <div>
                                                <h5 className="font-medium">Make your website in no-time with us.</h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a href="#" className="text-white linking bg-success-gradiant">Lets Talk <i className="ti-arrow-right"></i></a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20"><img src={img2} width="70" className="rounded" alt="img" /></div>
                                            <div>
                                                <h5 className="font-medium">Make your website in no-time with us.</h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a href="#" className="text-white linking bg-success-gradiant">Lets Talk <i className="ti-arrow-right"></i></a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20"><img src={img3} width="70" className="rounded" alt="img" /></div>
                                            <div>
                                                <h5 className="font-medium">Make your website in no-time with us.</h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a href="#" className="text-white linking bg-success-gradiant">Lets Talk <i className="ti-arrow-right"></i></a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20"><img src={img4} width="70" className="rounded" alt="img" /></div>
                                            <div>
                                                <h5 className="font-medium">Make your website in no-time with us.</h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a href="#" className="text-white linking bg-success-gradiant">Lets Talk <i className="ti-arrow-right"></i></a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer ">
                <Container className="feature30">
                    <Row>
                        <Col lg="10"><img src={img5} className="rounded img-responsive" alt="wrappixel" /></Col>
                        <Col lg="5" md="7" className="text-center wrap-feature30-box">
                            <Card className="card-shadow">
                                <CardBody>
                                    <div className="p-20">
                                        <span className="label label-info label-rounded">Feature 3</span>
                                        <h3 className="title">The New way of Making Your Website in mins</h3>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience. You will love it for sure.</p>
                                        <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" href="#"><span>Explore More <i className="ti-arrow-right"></i></span></a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div> */}
        </div>
    );
}

export default FeatureComponent;
