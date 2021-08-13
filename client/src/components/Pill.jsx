import React from 'react';
import './Pill.scss';

export default function Pill(props) {
    return (
        <div className="pill">
            <div className={`pill-primary ${props.color}`}>{props.text}</div>
        </div>
    );
}
