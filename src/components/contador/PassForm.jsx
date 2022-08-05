import React from "react";

export default props => {
    return (
        <div>
            <label htmlFor="passInput">Pass: </label>
            <input type="number" value={props.startPass} id="passInput" onChange={e => props.changePass(+e.target.value)} />
        </div>
    )
}