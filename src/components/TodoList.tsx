import { useState } from "react";
import { toDoList } from "../placeholderTodos";
import { ToDo } from "../interfaces";

const TodoList: React.FC = () => {

  const [toDos, setToDos] = useState<ToDo[]>(toDoList);
  const [title, setTitle] = useState<string>("");

  const handleChange = (id: any) => {
    setToDos((prevToDos) =>
      prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      ) 
    );
  };

  const handleAddTodo = () => {
    const id = Math.max(...toDos.map((todo) => todo.id ))
    setToDos([...toDos, {id: id+1, title: title, completed: false }])
    setTitle("")
  }

  const handleDeleteTodo = (id: number) => {
    const newTodoList = toDos.filter(todo => todo.id !== id)
    setToDos(newTodoList)
  }

  return (
    <>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    <button onClick={handleAddTodo} >ADD</button>
    <div>
      {toDos.map((toDo) => (
        <div key={toDo.id}>
          {toDo.title}
          <input type="checkbox" checked={toDo.completed} onChange={() => handleChange(toDo.id)} />
          <button style={{color: "red"}} onClick={() => handleDeleteTodo(toDo.id)} >X</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default TodoList;
