import React from "react";
import "./AddTask.css";
import { addTitleState, addTitleStateLength } from "../states/addTitleState";
import { useRecoilValue } from "recoil";

const AddTask = () => {
  const addTitle = useRecoilValue(addTitleState);
  const addTitleLength = useRecoilValue(addTitleStateLength);
  return (
    <div className="taskField">
      <div>{addTitleLength}個タスクがある。</div>
      <ul>
        {addTitle.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddTask;
