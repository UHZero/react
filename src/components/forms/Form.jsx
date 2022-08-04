import React, { useState } from "react";

export default props => {
    const [text, setText] = useState('useState to change value')
    const whenChange = e => setText(e.target.value)
    return (
        <div>
            <input value={text} onChange={whenChange} />
            <input value={text} readOnly />
            <input value={undefined} />
        </div>
    )
}