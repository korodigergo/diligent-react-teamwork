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
    const id = Math.max(...toDos.map((todo) => todo.id));
    setToDos([...toDos, { id: id + 1, title: title, completed: false }]);
    setTitle("");
  };

  const handleDeleteTodo = (id: number) => {
    const newTodoList = toDos.filter((todo) => todo.id !== id);
    setToDos(newTodoList);
  };

  return (
    <section className="flex flex-col gap-3 p-4">
      <div className="flex flex-row justify-center gap-3">
        <input
          className="py-2 border rounded px-2"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="border-2 p-2 border-black" onClick={handleAddTodo}>ADD</button>
      </div>

      <div className="grid gap-4 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {toDos.map((toDo) => (
          <div key={toDo.id} className="rounded-xl bg-white p-4 flex flex-row justify-center gap-3">
            {toDo.title}
            <input
              className="cursor-pointer"
              type="checkbox"
              checked={toDo.completed}
              onChange={() => handleChange(toDo.id)}
            />
            <button
              style={{ color: "red" }}
              onClick={() => handleDeleteTodo(toDo.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodoList;
