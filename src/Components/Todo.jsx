import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import todoContext from "../Context/todoContext";

export default function Todo() {
  let [list, setList] = useState([
    { id: 1, sub: "learn react ", finished: false },
    { id: 2, sub: "learn scss ", finished: false },
  ]);

  return (
    // we are going to use context api , for not to send props and to get rid of

    <todoContext.Provider value={{ list, setList }}>
      <AddTodo />
      <TodoList />
    </todoContext.Provider>
  );
}
