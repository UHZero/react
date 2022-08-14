import React from "react";
import "./button.css"

export default props => {
    return (
        <button className={props.buttonClass || "button"} onClick={_ => props.click && props.click(props.label)}>
            {props.label}
        </button>
    )
}