import React, { Fragment, useState } from "react";

const InputToDo = () => {
  const { description, setDescription } = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = description;
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify()
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export default InputToDo;
