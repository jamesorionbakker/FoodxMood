import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pill from '../Pill.jsx';
import './Entry.scss';
import ManageEntry from './ManageEntry.jsx';

export default function (props) {
    let { entry } = props;
    let { symptoms, mealType, type, time, _id } = entry;
    return (
        <Container fluid className="entry-container">
            <Row className="entry-heading">
                <Col>
                    <span className="entry-type-secondary">{type}</span>
                    <span className="entry-date">{time}</span>
                </Col>
                <Col xs="auto">
                    <ManageEntry entry={entry} />
                </Col>
            </Row>
            <Row className="entry-section">
                <Col xs="auto">
                    <div className="section-title">Symptoms:</div>
                </Col>
                <Col xs={true}>
                    {symptoms.map((symptom, index) => {
                        let severityEnum = {
                            1: 'Mild',
                            2: 'Moderate',
                            3: 'Severe',
                        };
                        const colorEnum = {
                            1: 'yellow',
                            2: 'orange',
                            3: 'red',
                        };
                        return (
                            <Pill
                                key={index}
                                primaryText={symptom.description}
                                secondaryText={severityEnum[symptom.severity]}
                                secondaryColor={colorEnum[symptom.severity]}
                            />
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
}
