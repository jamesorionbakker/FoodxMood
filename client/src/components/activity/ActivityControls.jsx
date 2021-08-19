import React from 'react';
import './ActivityControls.scss';
import { useDispatch, useSelector } from 'react-redux';
import { newMeal } from 'components/meal_form/state/MealFormActions';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { newHealthCheck } from 'components/health_check_form/state/healthCheckFormActions';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { addFilterKeyword, deleteFilterKeyword } from './state/ActivityActions';
import Pill from 'components/Pill';

export default function AddButtonsContainer(props) {
    let [filterInput, setFilterInput] = useState({ value: '', valid: false });
    const dispatch = useDispatch();
    let currentKeywordFilters = useSelector((state) => state.activity.filters.keywords);

    function handleFilterInputSubmit() {
        if (filterInput.value === '' || !filterInput.valid || filterInput.value.match(/^\s$/))
            return;
        dispatch(addFilterKeyword(filterInput.value));
        setFilterInput({ value: '', valid: false });
    }

    return (
        <Container className="activity-controls-container">
            <Row>
                <Col className="bs-col" xs={6} md="auto">
                    <Button
                        onClick={() => {
                            dispatch(newMeal());
                        }}
                        className="button-light-brown"
                        variant="default">
                        <i className="fas fa-plus"></i> Add Meal
                    </Button>
                </Col>
                <Col className="bs-col" xs={6} md="auto">
                    <Button
                        onClick={() => {
                            dispatch(newHealthCheck());
                        }}
                        className="button-light-brown"
                        variant="default">
                        <i className="fas fa-plus"></i> Add Wellness Check
                    </Button>
                </Col>
                <Col className="bs-col" xs={12} md="auto">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleFilterInputSubmit();
                        }}>
                        <InputGroup>
                            <Form.Control
                                className="filter-input"
                                onSubmit={(e) => {
                                    console.log(e);
                                }}
                                value={filterInput.value}
                                onChange={(e) => {
                                    if (e.target.value.match(/^\s/)) return false;
                                    setFilterInput({ valid: true, value: e.target.value });
                                }}
                                placeholder="Filter Results"
                                type="input"
                            />
                            <InputGroup.Text
                                className="submit-btn2 button-light-brown"
                                onClick={handleFilterInputSubmit}>
                                +
                            </InputGroup.Text>
                        </InputGroup>
                    </form>
                </Col>
            </Row>
            <Row>
                {currentKeywordFilters.map((keyword, i) => {
                    return (
                        <Col key={i} className="bs-col filter-instance" xs="auto">
                            <Pill
                                text={'#' + keyword}
                                size="lg"
                                color="brown"
                                deleteable
                                onDelete={() => {
                                    dispatch(deleteFilterKeyword(keyword));
                                }}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
