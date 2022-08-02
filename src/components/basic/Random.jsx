import React from "react";

const random = props => Math.random() * (props.max) + props.min
export default props =>
    <div>
        <h1>{Math.floor(random(props))}</h1>
    </div>