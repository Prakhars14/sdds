import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';
const Apply = () => {
    return (
        <>

            <Container className="mt-5 mb-5">
            <Row>
                <Col><h3>Apply Online</h3></Col>
            </Row>
                <Row className="d-flex justify-content-center pt-5 pb-5">
                    <Col xl={8}>
                    <Form>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Full Name</Label>
                            <Col sm={10}>
                            <Input type="text" name="name" id="exampleName" placeholder="Candidate Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Email</Label>
                            <Col sm={10}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword" sm={2}>Date of Birth</Label>
                            <Col sm={10}>
                            <Input type="date" name="Date" id="examplePassword" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Mobile Number</Label>
                            <Col sm={10}>
                            <Input type="number" name="mobno" id="exampleNumber" placeholder="Mobile Number" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Address</Label>
                            <Col sm={10}>
                            <Input type="textarea" name="address" id="exampleAddress" placeholder="Candidate's Address" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Last Educational Certificates</Label>
                            <Col sm={10}>
                            <Input type="file" name="file" id="exampleFile"/>
                            </Col>
                        </FormGroup>
                        
                            <Col className="d-flex justify-content-center">
                            <Button color="primary">Submit</Button>
                            </Col>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Apply
