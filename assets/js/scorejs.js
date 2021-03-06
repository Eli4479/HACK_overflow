// start side-bar js
var li_items = document.querySelectorAll(".side_bar_bottom ul li");

li_items.forEach(function (li_main) {
  li_main.addEventListener("click", function () {
    li_items.forEach(function (li) {
      li.classList.remove("active");
    })
    li_main.classList.add("active");
  })
})
// end side-bar js

// start score list js

var todoList = [{
  'todo': '',
  'id': 'todo0'
}];

var pageList = new Array();
var currentPage = 1;
var numberPerPage = 10;
var numberOfPages = 0;

function newElement() {
  var inputTitle = document.getElementById('title').value,
    inputMarks = document.getElementById('marks').value,
    todo = '';
  if (inputTitle === '' || inputMarks == '') {
    alert("Please enter a score!");
    return;
  } else {
    todo = inputTitle;
    if (inputMarks != '') {
      todo = todo + " - " + inputMarks
    }
  }
  var newTodoId = findNextId(),
    newTodo = {
      'todo': todo,
      'id': 'todo' + newTodoId
    };
  todoList.push(newTodo);
  sortElementsById();
  clearFields();
}

function fetchIdFromObj(todo) {
  return parseInt(todo.id.slice(4));
}

function findNextId() {
  if (todoList.length === 0) {
    return 0;
  }
  var lastElementId = fetchIdFromObj(todoList[todoList.length - 1]),
    firstElementId = fetchIdFromObj(todoList[0]);
  return (firstElementId >= lastElementId) ? (firstElementId + 1) : (lastElementId + 1);
}

function clearFields() {
  document.getElementById('title').value = '';
  // document.getElementById('usr').value = '';
  document.getElementById('marks').value = '';
}

function deleteElement(event) {
  var idOfEltToBeDeleted = event.target.parentElement.id;
  var arrayIndex = todoList.findIndex(function (singleTodo) {
    return singleTodo.id === idOfEltToBeDeleted;
  });
  if (arrayIndex !== -1) {
    todoList.splice(arrayIndex, 1);
  }
  load(todoList);
}

function displayOneElement(todoObject) {
  var li_element = document.createElement("li");
  var p_element = document.createElement("p");
  p_element.className = "task-name";
  li_element.appendChild(p_element);
  li_element.setAttribute("id", todoObject.id);
  var text_node = document.createTextNode(todoObject.todo);
  p_element.appendChild(text_node);
  var span_element = document.createElement("SPAN");
  span_element.className = "close";
  var txt_node = document.createTextNode("\u00D7");
  span_element.appendChild(txt_node);
  span_element.onclick = deleteElement;
  li_element.appendChild(span_element);
  document.getElementById("task-list").appendChild(li_element);
}

function sortElementsById() {
  var manyTodos = todoList.sort(function (a, b) {
    var x = fetchIdFromObj(a);
    var y = fetchIdFromObj(b);
    if (x > y) {
      return -1;
    }
    if (x < y) {
      return 1;
    }
    return 0;
  })
  load(manyTodos);
}

function sortElementsByName() {
  var manyTodos = todoList.sort(function (a, b) {
    var x = a.todo.toLowerCase();
    var y = b.todo.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  })
  load(manyTodos);
}

function searchInList() {
  var str = document.getElementById('search-text').value.toLowerCase();
  var searchResultList = [];
  for (var j = 0; j < todoList.length; j++) {
    if (todoList[j].todo.toLowerCase().match(str))
      searchResultList.push(todoList[j]);
  }
  load(searchResultList);
}

function getNumberOfPages(manyTodos) {
  return Math.ceil(manyTodos.length / numberPerPage);
}

function gotoPage(event) {
  currentPage = parseInt(event.target.id);
  loadList(todoList);
}

function refreshPaginations() {
  var paginationTarget = document.getElementById('pagination'),
    setActiveClass = false;
  paginationTarget.innerHTML = '';
  for (var i = 1; i <= numberOfPages; i++) {
    var li_element = document.createElement("li"),
      a_element = document.createElement('a');
    if (i === currentPage) {
      li_element.className = 'active';
      setActiveClass = true;
    } else {
      a_element.onclick = gotoPage;
    }
    a_element.setAttribute('id', i);
    a_element.innerHTML = i;
    li_element.appendChild(a_element);
    paginationTarget.appendChild(li_element);
  }
  if (numberOfPages > 0 && setActiveClass === false) {
    currentPage = 1;
    refreshPaginations();
    loadList(todoList);
  }
}

function loadList(manyTodos) {
  var begin = ((currentPage - 1) * numberPerPage);
  var end = begin + numberPerPage;
  pageList = manyTodos.slice(begin, end);
  refreshPaginations();
  drawList(pageList);
}

function drawList(manyTodos) {
  document.getElementById("task-list").innerHTML = "";
  manyTodos.forEach(function (singleTodo) {
    displayOneElement(singleTodo);
  });
}

function load(manyTodos) {
  numberOfPages = getNumberOfPages(manyTodos);
  loadList(manyTodos);
}

window.onload = function () {
  sortElementsById();
}
// end score list js