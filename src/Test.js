import React from 'react'

function Test(props) {
    return (
        <div>
            <h1>its test component</h1>
            <input type="text" onChange={props.change} />
        </div>
    )
}
export default Test;