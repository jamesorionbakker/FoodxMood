import React from 'react'
import './Pill.scss'

export default function Pill(props){
    return (
        <div className="pill">
                        <div className={`pill-primary ${props.primaryColor}`}>{props.primaryText}</div>
                        {props.secondaryText && <div className={`pill-secondary ${props.secondaryColor}`}>{props.secondaryText}</div>}
        </div>
    )
}