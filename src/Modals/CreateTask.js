import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function CreateTask({ modal, toggle, save }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  //   const handleChange = (e) => {

  //     const {name, value} = e.target

  //     if(name === "taskName"){
  //         setTaskName(value)
  //     }else{
  //         setDescription(value)
  //     }

  //}
  const handletaskName = (event) => {
    setTaskName(event.target.value);
  };

  const handledescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    save(taskObj);
    setTaskName('')
    setDescription('')
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Task name here"
            name="taskName"
            value={taskName}
            onChange={handletaskName}
          />
        </div>
        <br />
        <div>
          <label>Description</label>
          <textarea
            rows="5"
            className="form-control"
            value={description}
            name="description"
            onChange={handledescription}
            placeholder="Describe your task here..."

          ></textarea>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default CreateTask;
