import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import logo from '../assets/images/lgo.jpg';

const Faculty = () => {
    return (
        <>
           <Container className="mt-5 mb-5">
            <Row>
                <Col><h3>Professor</h3></Col>
            </Row>
            <Row className="m-5">
                <Col>
                    <Row className="mt-2 mb-2">
                        <Col lg={3}>
                            <img src={logo} width="90" height="90" class="d-inline-block align-top" alt=""/>
                        </Col>
                        <Col lg={9}>
                            <h5> Prakhar Singh</h5>
                            <p className="text-muted">Ph.D Associate Professor, Department of Painting</p>
                        </Col>
                    </Row>
                    <Row className="mt-2 mb-2">
                        <Col lg={3}>
                            <img src={logo} width="90" height="90" class="d-inline-block align-top" alt=""/>
                        </Col>
                        <Col lg={9}>
                            <h5> Prakhar Singh</h5>
                            <p className="text-muted">Ph.D Associate Professor, Department of Painting</p>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row className="mt-2 mb-2">
                        <Col lg={3}>
                            <img src={logo} width="90" height="90" class="d-inline-block align-top" alt=""/>
                        </Col>
                        <Col lg={9}>
                            <h5> Prakhar Singh</h5>
                            <p className="text-muted">Ph.D Associate Professor, Department of Painting</p>
                        </Col>
                    </Row>
                    <Row className="mt-2 mb-2">
                        <Col lg={3}>
                            <img src={logo} width="90" height="90" class="d-inline-block align-top" alt=""/>
                        </Col>
                        <Col lg={9}>
                            <h5> Prakhar Singh</h5>
                            <p className="text-muted">Ph.D Associate Professor, Department of Painting</p>
                        </Col>
                    </Row>
                </Col>

                
            </Row>
            </Container>
        </>
    )
}

export default Faculty
