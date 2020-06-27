import React from 'react'

function Test1(props) {
    return (
        <div>
            <h2>its test1 component</h2>
            <h3>{props.userName}</h3>
            <h3>{props.username}</h3>
        </div>
    )
}
export default Test1;