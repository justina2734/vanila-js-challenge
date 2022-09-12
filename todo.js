const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY="toDos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(event){
      const li=event.target.parentElement;
      li.remove();
}

function paintTodo(newTodo){
      const li = document.createElement("li");
      li.id = newTodo.id;
      const span = document.createElement("span");
      span.innerText = newTodo.text;
      const button = document.createElement("button");
      button.innerText="✔︎";
      button.addEventListener("click", deleteTodo);
      li.appendChild(span);
      li.appendChild(button);
      toDoList.appendChild(li);
}

function toDoSubmit(event){
      event.preventDefault();
      const newTodo=toDoInput.value;  //input의 현재 value를 새로운 변수에 복사하는 것
      toDoInput.value="";
      const newTodoObj={
        text:newTodo,
        id:Date.now(),
      }
      toDos.push(newTodoObj);
      paintTodo(newTodoObj);
      saveToDos();
}

toDoForm.addEventListener("submit",toDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

function uaenaFilter(){
    
}