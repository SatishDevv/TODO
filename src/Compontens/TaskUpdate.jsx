import React, { useState } from "react";
import Button from "./Button";

function TaskUpdate({ handleClosePopup,task,tasks ,setTasks  }) {
  const [taskUpdated, setTaskUpdated] = useState({
    id:task.id,
    task: task.task,
    status: task.status,
    tags: task.tags,
  });

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setTaskUpdated((prev) => {
      return { ...prev, [name]: value };
    });
    
  };
  // console.log(taskUpdated);

  const handleSelectTags = (tag) => {
    if(taskUpdated.tags.some( (item) => item ===tag )){
      const filterTag=  taskUpdated.tags.filter((item) => item !== tag );
      setTaskUpdated( (prev) => {
        return {...prev, tags: filterTag}
      }) 
    }else{
      setTaskUpdated( (prev) => {
        return {...prev, tags:[...prev.tags,tag]};
      } )
    }
  };

  const checkTag = (tag) => {
    return taskUpdated.tags.some((item) => item === tag);
  };

  const saveData = (id) => {
    if (tasks.id.some((item) => item === id )){
      const filterTask = tasks.filter((item) => item !== id)
      setTasks((prev)=>{
        return [...prev,taskUpdated ]
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(taskUpdated);
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          value={taskUpdated.task}
          name="task"
          type="text"
          placeholder="Enter Your Task"
          className="input input-bordered w-full max-w-xs"
          onChange={handleChanges}
        />
        <br /> <br />
        <div>
          <Button
            tagName="HTML"
            handleSelectTags={handleSelectTags}
            selected={checkTag("HTML")}
          />
          <Button
            tagName="CSS"
            handleSelectTags={handleSelectTags}
            selected={checkTag("CSS")}
          />
          <Button
            tagName="JavaScript"
            handleSelectTags={handleSelectTags}
            selected={checkTag("JavaScript")}
          />
          <Button
            tagName="React"
            handleSelectTags={handleSelectTags}
            selected={checkTag("React")}
          />
          <Button
            tagName="Node"
            handleSelectTags={handleSelectTags}
            selected={checkTag("Node")}
          />
          <Button
            tagName="Express"
            handleSelectTags={handleSelectTags}
            selected={checkTag("Express")}
          />
        </div>
        <div className="">
          <label className="input " htmlFor="dropdown">
            Select the TaskStatus:
          </label>
          <select
            className=""
            required
            name="status"
            value={taskUpdated.status}
            onChange={handleChanges}
          >
            <option value="TODO">TODO</option>
            <option value="DOING">Doing</option>
            <option value="DONE">Done</option>
          </select>
        </div>
        <div  className="flex justify-between ">
          <button type="submit" className="btn btn-secondary m-4 ">
            Update
          </button>
          <button
            onClick={handleClosePopup}
            type="submit"
            className="btn btn-secondary m-4 "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskUpdate;
