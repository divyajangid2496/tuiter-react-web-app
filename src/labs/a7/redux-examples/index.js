// This file glues the data source (reducer) and the data consumer together, through a Provider (middle)
// Provider delivers data in store to child elements.
// All reducers must collate their collective states into a common store.

import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
// now use configureStore to store all the data from reducers
import {configureStore} from "@reduxjs/toolkit";
import Todos from "./todos-component";

// If there is only one reducer
// const store = configureStore(hello);
// If there are more reducers
// All reducers must collate their collective states into a common/single store.
// store servers as a data storage
const store = configureStore(
    {
    reducer: {hello, todos}
    }
);

const ReduxExamples = () => {
    return(
        // Provider delivers data in store to child elements
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos />
                {/* component consumes the data */}
                <HelloReduxExampleComponent />
            </div>
        </Provider>
    )
}

export default ReduxExamples;