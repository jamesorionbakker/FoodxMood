import React from 'react';
import dayjs from 'dayjs';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pill from '../Pill.jsx';
import ManageEntry from './ManageEntry';
import './Entry.scss';
import { useDispatch, useSelector } from 'react-redux';
import { newRelativeHealthCheck } from 'components/health_check_form/state/healthCheckFormActions.js';

export default function MealEntry(props) {
    let { entry } = props;
    let { ingredients, mealType, time, missingHealthCheck } = entry;
    let currentKeywordFilters = useSelector((state) => state.activity.filters.keywords);
    let dispatch = useDispatch()

    function getEmoji(type) {
        return {
            Breakfast: '🍳',
            Lunch: '🥪',
            Dessert: '🧁',
            Snack: '🍇',
            Dinner: '🍴',
            Drink: '🥤',
            HealthCheck: '❤️',
        }[type];
    }

    return (
        <Container className="entry-container" fluid>
            {missingHealthCheck && (
                <div className="w-100 add-missing-health-check-container">
                    <Button 
                    className="button-light-red"
                    onClick={()=>{
                        dispatch(newRelativeHealthCheck(entry.time))
                    }}>
                        <i className="fas fa-plus"></i> Wellness Check
                    </Button>
                </div>
            )}
            <Row>
                <Col xs={12} md="auto" className="time-container">
                    {dayjs.unix(time).format('h:mm A')}
                </Col>
                <Col xs={12} md={true} className="entry-data-container meal-entry-container">
                    <Row>
                        <Col>
                            <Row className="entry-heading">
                                <Col>
                                    <h5>
                                        <span className="emoji">{getEmoji(mealType)}</span>
                                        {mealType}
                                    </h5>
                                </Col>
                            </Row>
                            <Row className="entry-section">
                                <Col xs="auto">
                                    <div className="section-title">Ingredients:</div>
                                </Col>
                                <Col xs={true}>
                                    {ingredients.map((ingredient, index) => {
                                        let matchesKeyword = currentKeywordFilters.some(
                                            (keyword) => {
                                                return ingredient.name.match(
                                                    new RegExp(keyword, 'gi')
                                                );
                                            }
                                        );
                                        return (
                                            <Pill
                                                margin={5}
                                                highlight={matchesKeyword}
                                                key={index}
                                                text={ingredient.name}
                                                color="brown"
                                                size="sm"
                                            />
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
