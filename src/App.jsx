import { useEffect, useState } from "react";
import "./App.css";
import TaskColumns from "./Compontens/TaskColumns";
import TaskForm from "./Compontens/TaskForm";

const oldTasks = localStorage.getItem("tasks");

function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks));

  useEffect( () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDeleteTask = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };
  
  return (
    <>
      <TaskForm setTasks={setTasks} />
      <div class="grid grid-cols-3 gap-4">
        <TaskColumns
          tital="TODO"
          tasks={tasks}
          setTasks={setTasks}
          status="TODO"
          id={tasks.id}
          handleDeleteTask={handleDeleteTask}
          
        />
        <TaskColumns
          tital="DOING"
          tasks={tasks}
          setTasks={setTasks}
          status="DOING"
          id={tasks.id}
          handleDeleteTask={handleDeleteTask}
          
        />
        <TaskColumns
          tital="DONE"
          tasks={tasks}
          setTasks={setTasks}
          status="DONE"
          id={tasks.id}
          handleDeleteTask={handleDeleteTask}
          
        />
      </div>
    </>
  );
}

export default App;
