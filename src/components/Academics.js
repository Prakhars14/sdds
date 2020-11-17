import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import {Accordion, Card} from 'react-bootstrap';

const Academics = () => {
    return (
        <>
            <Container className="mt-5 mb-5">
            <Row>
                <Col><h3>Academic Courses</h3></Col>
            </Row>
                <Row className="mt-4">
                    <Col>
                        <Accordion  defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0"  className="cursor-pointer">
                                Arts <i class="fas fa-angle-down float-right"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body className="pr-5 pt-3">
                                    <ol>
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Sanskrit</li>
                                        <li>Urdu</li>
                                        <li>Ancient Indian History, Culture and Archeology</li>
                                        <li>Philosophy</li>
                                        <li>Music – Vocal</li>
                                        <li>Music – Instrumental</li>
                                        <li>Painting</li>
                                        <li>Geography</li>
                                        <li>Home Science</li>
                                    </ol>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1" className="cursor-pointer">
                                Commerce<i class="fas fa-angle-down float-right"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body className="pr-5 pt-3">
                                    <ol>
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Sanskrit</li>
                                        <li>Urdu</li>
                                        <li>Ancient Indian History, Culture and Archeology</li>
                                        <li>Painting</li>
                                        <li>Geography</li>
                                        <li>Home Science</li>
                                    </ol>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2" className="cursor-pointer">
                                Science<i class="fas fa-angle-down float-right"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body className="pr-5 pt-3">
                                    <ol>
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Sanskrit</li>
                                        <li>Urdu</li>
                                        <li>Ancient Indian History, Culture and Archeology</li>
                                        <li>Philosophy</li>
                                        <li>Music – Vocal</li>
                                        <li>Music – Instrumental</li>
                                        <li>Painting</li>
                                    </ol>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3" className="cursor-pointer">
                                Engineering<i class="fas fa-angle-down float-right"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body className="pr-5 pt-3">
                                    <ol>
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Sanskrit</li>
                                        <li>Urdu</li>
                                        <li>Ancient Indian History, Culture and Archeology</li>
                                        <li>Philosophy</li>
                                        <li>Music – Vocal</li>
                                    </ol>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4" className="cursor-pointer">
                                CA<i class="fas fa-angle-down float-right"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body className="pr-5 pt-3">
                                    <ol>
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Sanskrit</li>
                                        <li>Urdu</li>
                                    </ol>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Academics
