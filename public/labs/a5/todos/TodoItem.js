const TodoItem = (todo) => {
    return(`
<!--         <li>${todo}</li>-->
        <li>
            <input type="checkbox" ${todo.done ? 'checked' : ''}/>
            ${todo.title}
            (${todo.status})
        </li>
    `);
}

export default TodoItem;