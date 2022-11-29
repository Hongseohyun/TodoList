const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];
const TODOS_KEY = "todos"

function saveToDos(){
    // 문자열로 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement; 
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos  ();
}

function  paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click", deleteToDo)
    // li를 span안에 집어넣음 (자식으로 상속)
    li.appendChild(span);
    li.appendChild(button);
    // HTML의 ul에 li를 추가
    toDoList.appendChild(li);
}

function handleToDo(event){
    event.preventDefault();
    // input의 vlalue를 새로운 변수에 복사
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDo);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    // forEach : paintToDo를 parsedToDos 배열의 요소마다 실행
    // paintToDo를 기본적으로 실행
    parseToDos.forEach(paintToDo);
}
