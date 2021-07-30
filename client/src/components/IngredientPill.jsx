import React from 'react'
import './IngredientPill.scss'

export default function IngredientPill(props){
    return (
        <div className="ingredient-pill">
                        <div className="pill-primary">{props.primaryText}</div>
                        <div className="pill-secondary"><i onClick={() => props.handleDelete(props.index)} className="fas fa-times"></i></div>
        </div>
    )
}