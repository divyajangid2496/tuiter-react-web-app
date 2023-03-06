import TodoItem from './TodoItem.js'
import todos from './todos.js'

const TodoList = () => {
    return(`
        <ul>
            ${
                todos.map(todo => {
                    return(TodoItem(todo));
                    }).join('')
            }
        </ul>
    `);
}
export default TodoList;

// <!--            ${TodoItem('Buy Milk')}-->
// <!--            ${TodoItem('Pickup the kids')}-->
// <!--            ${TodoItem('Walk the dogs')}-->
// <!--            <li>Buy Milk</li>-->
// <!--            <li>Pickup the kids</li>-->
// <!--            <li>Walk the dogs</li>-->