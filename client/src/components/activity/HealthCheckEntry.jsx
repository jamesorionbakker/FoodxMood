import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pill from '../Pill.jsx';
import './Entry.scss';
import ManageEntry from './ManageEntry.jsx';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';


export default function HealthCheckEntry(props) {
    let { entry } = props;
    let { symptoms, time } = entry;
    let currentKeywordFilters = useSelector(state => state.activity.filters.keywords)

    return (
        <Container className="entry-container" fluid>
            <Row>
                <Col xs={12} md="auto" className="time-container">
                    {dayjs.unix(time).format('h:mm A')}
                </Col>
                <Col xs={12} md={true} className="entry-data-container health-check-entry-container">
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
                                        let matchesKeyword = currentKeywordFilters.some(keyword=>{
                                            return symptom.description.match(new RegExp(keyword, 'gi'))
                                        })
                                        return (
                                            <Pill margin={5} key={index} highlight={matchesKeyword} text={symptom.description} color="brown" size="sm" />
                                        );
                                    })}
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md="auto" className="manage-entry-col">
                            <ManageEntry entry={entry} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
