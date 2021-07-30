import React from 'react';
import { useState } from 'react';
import './IngredientPill.scss';

export default function IngredientPill(props) {
    let { onClick } = props;

    return (
        <div className="ingredient-pill">
            <div
                onClick={onClick}
                className="pill-primary">
                {props.primaryText}
            </div>
        </div>
    );
}
