import React from "react";
import TaskCard from "./TaskCard";

function TaskColumns({ tital, status, tasks, setTasks, handleDeleteTask }) {
  return (
    <div className="container mx-auto">
      <div className="max-w-lg mx-auto  shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1>{tital}</h1>
      </div>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              tasks={tasks}
              task={task}
              setTasks={setTasks}
              key={index}
              tital={task.task}
              tags={task.tags}
              index={index}
              handleDeleteTask={handleDeleteTask}
            />
          )
      )}
    </div>
  );
}

export default TaskColumns;
