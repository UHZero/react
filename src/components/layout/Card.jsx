import "./Card.css"
import React from "react";

export default props => {
    const style = {
        backgroundColor: props.color || ' rgba(19, 116, 78, 0.459)',
        borderColor: props.color || ' rgba(19, 116, 78, 0.459)'
    }
    return <div className="Card" style={style}>
        <div className="Title">
            {props.title}
        </div>
        <div className="Content">
            {props.children}
        </div>
    </div>
}