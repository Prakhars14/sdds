import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const EventDetails = () => {
    return (
        <>
          <Container className="mt-5 mb-5">
            <Row>
                <Col><h3>Event Header</h3></Col>
            </Row>
                <Row>
                    <Col>
                        <p className="text-muted"> Vasanta College for Women is one of the oldest colleges of Varanasi, admitted to the privileges of Banaras Hindu University and runs under the aegis of Krishnamurti Foundation India, a world renowned foundation devoted to the cause of education. The college is recognized under Section 2 (f) and 12 (B) of the UGC Act, 1956.
                            The college solemnizes the confluence of visionary ideals and objectives of thinkers like Dr. Annie Besant, Shri Jiddu Krishnamurti and Bharat Ratna Pt. Madan Mohan Malviya Ji. The college aims to promote value based education in order to develop overall growth of personality and ready to face the new challenges of life while discharging the responsibilities as noble citizens.
                            The college incessantly serves the students with the knowledge of Arts, Social Sciences, Education and Commerce along with proper emphasis on Indian culture, literature (UG, PG, Ph.D and Diploma Courses) and follows the Academic Calendar of Banaras Hindu University.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EventDetails
