import { useEffect, useState } from "react";

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const toDoList: ToDo[] = [
    {
      id: 1,
      title: "Do the dishes",
      completed: false,
    },
    {
      id: 2,
      title: "Do the laundry",
      completed: true,
    },
  ];
  const [toDos, setToDos] = useState<ToDo[]>(toDoList);
  const [title, setTitle] = useState<string>("");

  const handleChange = (id: any) => {
    setToDos((prevToDos) =>
      prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      )
      
    );
  };

useEffect(() => {
  console.log(toDos)
},[toDos])

  return (
    <div>
      {toDos.map((toDo) => (
        <div key={toDo.id}>
          {toDo.title}
          <input type="checkbox" checked={toDo.completed} onChange={() => handleChange(toDo.id)} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
