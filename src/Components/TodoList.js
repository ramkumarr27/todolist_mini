import React, { useEffect, useState } from "react";
import CreateTask from "../Modals/CreateTask";
import Card from "./Card";

function TodoList() {
  const [modal, setModal] = useState(false);
  const [tasklist, setTaskList] = useState([]);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    let arr = localStorage.getItem("tasklist");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const saveTask = (taskObj) => {
    let tempList = tasklist;
    tempList.push(taskObj);
    localStorage.setItem("tasklist", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  const deleteTask = (index)=>{
    let tempList = tasklist;
    tempList.splice(index,1);
    localStorage.setItem("tasklist",JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  }

  const updateListArray =(obj,index)=>{
    let tempList = tasklist;
    tempList[index]=obj;
    localStorage.setItem("tasklist",JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();

  }

  return (
    <>
      <div className="header text-center">
        <h2>TodoList</h2>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {
        tasklist && tasklist.map((obj, index) =>
         <Card taskObj={obj} index={index} deleteTask = {deleteTask} updateListArray={updateListArray} /> )
        }
      </div>
      <CreateTask modal={modal} toggle={toggle} save={saveTask} />
    </>
  );
}

export default TodoList;
