import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pill from '../Pill.jsx';
import './Entry.scss';
import ManageEntry from './ManageEntry.jsx';
import dayjs from 'dayjs';

export default function HealthCheckEntry(props) {
    let { entry } = props;
    let { symptoms, type, time } = entry;
    return (
        <Container className="entry-container" fluid>
            <Row>
                <Col xs="auto" className="time-container">
                    {dayjs.unix(time).format('h:mm A')}
                </Col>
                <Col xs={true} className="entry-data-container health-check-entry-container">
                    <Row>
                        <Col>
                            <Row className="entry-heading">
                                <Col>
                                    <h5>
                                        <span className="emoji">❤️</span>Wellness Check
                                    </h5>
                                </Col>
                            </Row>
                            <Row className="entry-section">
                                <Col xs="auto">
                                    <div className="section-title">Symptoms:</div>
                                </Col>
                                <Col xs={true}>
                                    {symptoms.map((symptom, index) => {
                                        return (
                                            <Pill
                                                key={index}
                                                text={symptom.description}
                                                color="green"
                                            />
                                        );
                                    })}
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="auto" className="manage-entry-col">
                            <ManageEntry entry={entry} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
