const addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo'),
    deleteButton = document.querySelector('.delete'),
    editButton = document.querySelector('.edit');

let todoList = [];

let displayTodo = () => {
       document.getElementById('item_${i}');
    let displayMessage = '';
    todoList.forEach((item, i) => {
        let checked = item.checked ? 'checked' : '';
        displayMessage += `
      <li draggable="true" class="item">
            <input type="checkbox" class="task_text" id="item_${i}" ${checked}>
            <label for="item_${i}">${item.todo}</label>
            <input type="text" class="edit_mode">
            <button class="edit"><i class="material-icons">edit</i></button>
            <button class="delete"><i class="material-icons">delete</i></button>
    </li>`;
    });
    todo.innerHTML = displayMessage;
};

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    localStorage.clear();
    displayTodo();
}
addButton.addEventListener('click', () => {
    let newTodo = {
        todo: addMessage.value,
        checked: false
    };
    todoList.push(newTodo);
    displayTodo();
    localStorage.setItem('todo', JSON.stringify(todoList));
    localStorage.clear();
});
todo.addEventListener('change', (event) => {
    let valueLabel = todo.querySelector('[for=' + event.target.id + ']').innerHTML;
    todoList.forEach((item) => {
        if (item.todo === valueLabel) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});

//Drag & Drop
let dragEl;

function dragStart(e) {
    dragEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
}

function dragEnter(e) {
    e.preventDefault();
    return true;
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    if (dragEl !== this) {
        this.parentNode.removeChild(dragEl);
        let dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin', dropHTML);
        let dropElem = this.previousSibling;
        addEvents(dropElem);
    }
    e.stopPropagation();
    return false;
}

function addEvents(elem) {
    elem.addEventListener('dragstart', dragStart);
    elem.addEventListener('dragover', dragOver);
    elem.addEventListener('drop', drop);
}
let cols = document.querySelectorAll('.todo .item');
