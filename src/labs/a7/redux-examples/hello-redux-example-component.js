// This component can retrieve the data from the reducer and display it.
// Notice: reducer is not imported in this file, this component only consumes data
import React from "react"
// useSelector hook used to extract data from the reducer
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    // Way 1: extract 'Hello World' from reducer 'hello'
    // const message = useSelector((hello) => hello.message)
    // Way 2: now hello is bounded with todos. The state of each reducer is now accessible through these properties
    const message = useSelector((state) => state.hello.message);

    // render the message in H1 tag
    return(
        <h1>{message}</h1>
    )
}

export default HelloReduxExampleComponent;