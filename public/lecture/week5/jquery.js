/* eslint-env jquery */
function clickMe() {
    console.log("Thanks for clicking me");
}

function clickMeToo() {
    alert('Thanks for clicking me too!');
}

const todoItems = [
    'Make Breakfast',
    'Walk Dogs',
    'Make Dinner',
    'Take shower',
    'Watch movie',
    'Go to bed'];

function init() {
    const hello = document.getElementById('hello');
    hello.style.color = 'red';
    hello.innerHTML = 'Hello there how are you?';
    // const clickMe = document.getElementById('click-me');

    const hello2 = jQuery("#hello");
    hello2.css('color', 'green');

    $("#hello")
        .css({
            'color': 'blue',
            'background-color': 'yellow'
        })
        .html('Hey, how are you doing?')
        .click(clickMeToo);


    $("#click-me-too").click(clickMe);

    $('#clickToHide').click(
        function () {
            $('#hideMe').hide();
        }
    )

    $('#clickToShow').click(() => {$('#hideMe').show()})

    $('#clickToToggle').click(() => {$('#hideMe').toggle()})

    const renderTodosJQuery = (todoItems) => {
        const todoList = $('#todo');
        // Empty all items in the todoList
        todoList.empty();
        todoItems.forEach((item, index) => {
            const newTodoItem = $(`
                <li>
                    <button id="${index}" class="delete-item">Delete</button>
                    ${item}
                </li>`);
            todoList.append(newTodoItem);
        })
    }
    renderTodosJQuery(todoItems);

    const addTodo = () => {
        // alert('add todo');
    //    grab the input field
        const todoText = $('#new-todo').val()
        todoItems.push(todoText)
        renderTodosJQuery(todoItems)
    }

    $('#add-todo').click(addTodo);

    $('#todo').on('click', '.delete-item', (event) => {
        console.log(event)
        console.log(event.target)
        // use jquery to get the element represented by event.target
        const target = $(event.target)
        console.log(target)
        const index = target.attr('id')
        todoItems.splice(index, 1)
        renderTodosJQuery(todoItems)
    })
    // const walkDogs = $('<li>Walk Dogs</li>');
    // todoList.append(walkDogs);
    // const makeDinner = $('<li>Make Dinner</li>');
    // todoList.append(makeDinner);
    // const makeBreakfast = $('<li>Make Breakfast</li>');
    // todoList.prepend(makeBreakfast);
    // const alice = {
    //     first: 'Alice',
    //     last: 'Wonderland',
    //     salary: 100000};
    // console.log(alice)
    // alice['salary'] = alice.salary + 10000;
    // console.log(alice)
    // alice.salary += 10000;
    // console.log(alice)
    //
    // // $("#hello").html("Hello World!")
    // $("<h1>").append(" World!")

}
// $ alias jQuery
$(init);