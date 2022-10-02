import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditToDo";

const ListToDo = () => {
  const [todos, setTodos] = useState([]);

  //delete function
  async function deleteTodo(id) {
    try {
      const res = await fetch(`http://localhost:3500/todo/todo/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id != id));
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getTodos() {
    const res = await fetch("http://localhost:3500/todo/todos");

    const todoArray = await res.json();

    setTodos(todoArray);
  }

  useEffect(() => {
    getTodos();
  });
  return (
    <Fragment>
      (" ")
      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    */}
          {todos.map((todo) => {
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><EditTodo todo={todo}/></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListToDo;
