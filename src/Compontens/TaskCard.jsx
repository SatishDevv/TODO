import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import CardButton from "./CardButton";
import TaskUpdate from "./TaskUpdate";

function TaskCard({ handleDeleteTask, index, task,tasks ,setTasks }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className=" shadow-md bg-slate-800 mb-3 rounded-md p-4 relative">
        <p className="text font-semibold mb-4">{task.task}</p>
        {/* <p className="text-gray-700 mb-4">{tags}</p> */}
        <div className="flex justify-between mb-4">
          {task.tags.map((tag, index) => (
            <CardButton key={index} tagName={tag} selected />
          ))}
        </div>
        <FaEdit
          onClick={() => setShowPopup(true)}
          className="text-gray-600 absolute top-0 right-8 mt-2 mr-2 cursor-pointer hover:bg-slate-700 "
        />

        <FaTrash
          onClick={() => handleDeleteTask(index)}
          className="text-gray-600 absolute top-0 right-0 mt-2 mr-2 cursor-pointer hover:bg-slate-700 "
        />
      </div>
      {showPopup && (
        <div className="fixed  top-0 left-0 w-full h-full  bg-gray-900 bg-opacity-100 flex justify-center items-center">
          <TaskUpdate
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            handleClosePopup={handleClosePopup}
          />
        </div>
      )}
    </>
  );
}

export default TaskCard;
