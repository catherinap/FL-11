let rootNode = document.getElementById('root');
const addMessage = document.querySelector('.message'),
      addButton = document.querySelector('.add'),
      todo = document.querySelector('.todo');
      
let displayTodo = () => {
    let displayMessage = '';
    rootNode.forEach((item, i) => {
        let checked = item.checked ? 'checked' : '';
        displayMessage += `
            <li draggable="true" class="list">
            <span class="checkmark"></span>
            <input type="checkbox" id="item_${i}" ${checked} onclick='checkItem(event)'>
            <label class="item_text" for="item_${i}">${item.todo}
            </label>
            <button onclick='editItem(event)'><i class="material-icons edit">edit</i></button>
            <button onclick='deleteItem(event)'><i class="material-icons delete">delete</i></button>
            </li>      
     `;
    });
    todo.innerHTML = displayMessage;
};
if (localStorage.getItem('todo')) {
    rootNode = JSON.parse(localStorage.getItem('todo'));
    displayTodo();
}
addButton.addEventListener('click', () => {
    let newTodo = {
        todo: addMessage.value,
        checked: false
    };
    rootNode.push(newTodo);
    displayTodo();
    localStorage.setItem('todo', JSON.stringify(rootNode));
});

function checkItem(e) {
    if (e.target.checked) {
        let listItemCheck = e.target.parentElement;
        let complete = document.createElement('li');
        complete.appendChild(listItemCheck.children[1]);
    }
}

function deleteItem(e) {
    console.log('deleted');
    let listRemove = e.target.parentElement.parentElement;
    let complete = document.createElement('li');
    complete.appendChild(listRemove.children[1]);
    todo.removeChild(listRemove);
}


//Drag & Drop 

let dragEl = null;

function dragStart(e) {
    dragEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
    this.classList.add('dragElem');
}

function dragEnter(e) {
    e.preventDefault();
    return true;
}

function dragOver(e) {
    e.preventDefault();
    this.classList.add('over');
}

function drop(e) {
    if (dragEl !== this) {
        this.parentNode.removeChild(dragEl);
        let dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin', dropHTML);
        let dropElem = this.previousSibling;
        addEvents(dropElem);
    }
    this.classList.remove('over');
    e.stopPropagation();
    return false;
}

function addEvents(elem) {
    elem.addEventListener('dragstart', dragStart);
    elem.addEventListener('dragover', dragOver);
    elem.addEventListener('drop', drop);
}
let cols = document.querySelectorAll('.todo .list');
[].forEach.call(cols, addEvents);