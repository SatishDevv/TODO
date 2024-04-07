import React, { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from 'uuid';

function TaskForm({ setTasks }) {
  const [taskData, setTaskData] = useState({
    id:"",
    task: "",
    status: "TODO",
    tags: [],
  });
  // handle the Change inpput Box and dropdown button events.
  const handleChanges = (event) => {
    const { name, value } = event.target; //target the input field name and input value ;
    setTaskData((prev) => {
      return { ...prev, [name]: value , id: uuidv4() };
    });
  };

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  //
  const handleSelectTags = (tag) => {
    // check if selected tag is already existing in the taskData Array.
    if (taskData.tags.some((item) => item === tag)) {
      //if tag is existed in TaskData Array filter it out from the taskData Array. and stored in filterTag variable.
      const filterTag = taskData.tags.filter((item) => item !== tag);
      // console.log(filterTag);
      // update the taskData state  removing the selected tag from the taskData Array.
      setTaskData((prev) => {
        return { ...prev, tags: filterTag };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }

    // console.log(tag);
  };
  // handle the submit button events
  const handleSubmit = (event) => {
    event.preventDefault(); // when user clicks on the submit button to stop page refreshing.
    // console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      id:"",
      task: "",
      status: "TODO",
      tags: [],
    });
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          value={taskData.task}
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
          <select className="" required name="status" value={taskData.status} onChange={handleChanges}>
            <option value="TODO">TODO</option>
            <option value="DOING">Doing</option>
            <option value="DONE">Done</option>
          </select>
        </div>
        <button type="submit" className="btn btn-secondary m-4 ">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
