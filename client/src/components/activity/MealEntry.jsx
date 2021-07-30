import React from 'react';
import dayjs from 'dayjs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pill from '../Pill.jsx';
import ManageEntry from './ManageEntry'
import './Entry.scss';

export default function MealEntry(props) {
    let { entry } = props
    let { ingredients, mealType, time} = entry;
    return (
        <Container fluid className="entry-container">
                    <Row className="entry-heading">
                        <Col ><h6>{mealType}: {dayjs.unix(time).format('h:mm A')}</h6></Col>
                        <Col xs="auto">
                            <ManageEntry entry={entry} />
                            </Col>
                    </Row>
                    <Row className="entry-section">
                        <Col xs="auto">
                            <div className="section-title">Ingredients:</div>
                        </Col>
                        <Col xs={true}>
                            {ingredients.map((ingredient, index) => {
                                return (
                                    <Pill
                                        key={index}
                                        primaryText={ingredient.name}
                                    />
                                );
                            })}
                        </Col>
                    </Row>
        </Container>
    );
}
