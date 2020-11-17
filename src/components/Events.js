import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Table } from 'reactstrap'

const items = [
    {
      id: 1,
      header: 'SDDS Annual Competition starts from 12th Nov 2020!',
      Main: 'Slide 1'
    },
      {
        id: 2,
        header: 'World Cup starts from 12th Nov 2020!',
        Main: 'Slide 2'
      },
      {
        id: 3,
        header: 'IPL starts from 12th Nov 2020!',
        Main: 'Slide 3'
      },
      {
        id: 4,
        header: 'SDDS Annual Competition starts from 12th Nov 2020!',
        Main: 'Slide 1'
      },
        {
          id: 5,
          header: 'World Cup starts from 12th Nov 2020!',
          Main: 'Slide 2'
        },
        {
          id: 6,
          header: 'IPL starts from 12th Nov 2020!',
          Main: 'Slide 3'
        },
        {
            id: 7,
            header: 'SDDS Annual Competition starts from 12th Nov 2020!',
            Main: 'Slide 1'
          },
            {
              id: 8,
              header: 'World Cup starts from 12th Nov 2020!',
              Main: 'Slide 2'
            },
            {
              id: 9,
              header: 'IPL starts from 12th Nov 2020!',
              Main: 'Slide 3'
            }
    ];
const Events = () => {
    return (
        <>
        <Container className="mt-5 mb-5">
                <Row>
                    <Col><h3>Latest News/Events</h3></Col>
                </Row>
                <Row className="mt-3 mb-3">
                  <Col>
                    <Table striped>
                      <tbody>
                        {items.map((item, index)=>(
                        <tr>
                        <th scope="row">{index+1}</th>
                        <td><Link to={`/events/${item.id}`} className="event">{item.header}</Link></td>
                      </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
        </Container>
        </>
    )
}

export default Events
