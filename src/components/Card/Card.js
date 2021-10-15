import React from 'react'
import "./Card.css"
const Card = (props) => {
    return (
        <div className="card-container">
            <img src={props.item.img} className="card-img"/>
            <div className="card-content">
            <p>{props.item.date} - {props.item.read}</p>
            <h3>{props.item.title}</h3>
            <p>{props.item.subtext.substring(0,100)}...</p>
            </div>
        </div>
    )
}

export default Card
