import React from 'react';
import './Pill.scss';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Pill(props) {
    let { text, deleteable, onDelete, onClick, className, color, size, margin, highlight } = props;
    return (
        <ButtonGroup
            className="pill-container"
            style={margin ? { marginRight: margin, marginBottom: margin } : { margin: 0 }}>
            <div
                onClick={onClick}
                className={`pill-body pill-${size} pill-${color} ${
                    deleteable && 'pill-deleteable'
                } ${highlight && 'pill-highlight'}`}>
                {text}
            </div>
            {deleteable && (
                <Button
                    onClick={onDelete}
                    className={`button-dark-${color} delete-keyword ${
                        className ? className : ''
                    } delete-btn-${size}`}>
                    <i className="fas fa-times"></i>
                </Button>
            )}
        </ButtonGroup>
    );
}
