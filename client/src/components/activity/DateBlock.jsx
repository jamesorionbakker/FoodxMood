import React from 'react';
import MealEntry from './MealEntry.jsx';
import HealthCheckEntry from './HealthCheckEntry.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './DateBlock.scss';

export default function DateBlock(props) {
    let { entries, index } = props;
    return (
        <div>
            {index > 0 && <hr />}
            <Container fluid className="date-block-container">
                <Row>
                    <Col xs={12} md='auto' className="date-col">
                        <div className="date-container">
                            {entries[0].date}
                        </div>
                    </Col>
                    <Col xs={12} md={true}  className="entries-col">
                        {entries.map((entry) => {
                            if (entry.type === 'meal')
                                return <MealEntry key={entry._id} entry={entry} />;
                            if (entry.type === 'healthCheck')
                                return <HealthCheckEntry key={entry._id} entry={entry} />;
                            return null
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
