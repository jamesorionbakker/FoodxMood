import React from 'react';
import dayjs from 'dayjs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pill from '../Pill.jsx';
import ManageEntry from './ManageEntry';
import './Entry.scss';

export default function MealEntry(props) {
    let { entry } = props;
    let { ingredients, mealType, time } = entry;

    function getEmoji(mealType){
        const mealEnum = {
            'Breakfast': '🍳',
            'Lunch': '🥪',
            'Dessert': '🧁',
            'Snack': '🍇',
            'Dinner': '🍴',
            'Drink': '☕'
        }
        return mealEnum[mealType];
    }

    return (
        <Container className="entry-container" fluid>
            <Row>
                <Col xs="auto" className="time-container">{dayjs.unix(time).format('h:mm A')}</Col> 
                <Col xs={true} className="entry-data-container meal-entry-container">
                        <Row className="entry-heading">
                            <Col>
                                <h5>
                                {getEmoji(mealType)} {mealType}
                                </h5>
                            </Col>
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
                                    return <Pill key={index} text={ingredient.name} color="red" />;
                                })}
                            </Col>
                        </Row>
                </Col>
            </Row>
        </Container>
    );
}
