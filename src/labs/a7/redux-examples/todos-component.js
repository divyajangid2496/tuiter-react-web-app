// React useState hook can be used to deal with local component state
import React, {useState} from "react"
// React useDispatch hook send the new state to the reducer
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
    // Retrieve todos from reducer state and assign to local todos constant
    const todos = useSelector(state => state.todos)

    // create local state variable todo_, its value can be mutated using a function called setTodo
    const [todo, setTodo] = useState({do: ''})

    // get dispatcher to invoke reducer functions
    const dispatch = useDispatch()

    // handle checkbox click event, accept todo_ index,  send index to reducer function
    // passing index of todo_ to toggle done field
    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo))
    }

    // handle delete button click, accepts index dispatch event to deleteTodo reducer function
    // passing index which we want to delete
    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }

    // handles the click event of button `Create`
    const createTodoClickHandler = () => {
        // call reducer function passing new todo_ as the payload in the action object
        // todo_ has been changed by keystroke changes in input field
        dispatch(addTodo(todo))
    }

    // handle keystroke changes in input field
    const todoChangeHandler = (event) =>
    {
        // get data from input field
        const doValue = event.target.value
        // create newTodo object instance
        const newTodo = {
            // setting the object do property
            do: doValue
        }
        // change local state variable by setTodo
        setTodo(newTodo)
    }

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler} className="btn btn-primary w-25 float-end">Create</button>
                    <input onChange={todoChangeHandler} value={todo.do} className="form-control w-75" />
                </li>
                {
                    // Add index parameter
                    todos.map((todo, index) =>
                        <li key= {todo._id} className="list-group-item">
                            {/* Note () => {} because we are passing index parameter otherwise gets into infinite loop
                            only delete once */}
                            <button onClick={() => deleteTodoClickHandler(index)}
                                    className="btn btn-danger float-end ms-2">Delete</button>
                            {/* new checkbox which is checked if todo_.done is true.
                            if user changes checkbox, we'll pass the todo_ to reducer function to update todo_'s state*/}
                            <input type="checkbox" checked={todo.done} onChange={() => toggleTodoDone(todo)} className="me-2"/>
                            {todo.do}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Todos;