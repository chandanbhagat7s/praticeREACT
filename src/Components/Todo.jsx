import { useReducer, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import todoContext from "../Context/todoContext";
import todoReducers from "../Reducers/todoReducers";
import TododispatchContext from "../Context/tododispatchContext";

// we will use reducer hook wich takes :
// reducer function and initial state

export default function Todo() {
  const [list, dispatch] = useReducer(todoReducers, []);
  // let [list, setList] = useState([
  //   { id: 1, sub: "learn react ", finished: false },
  //   { id: 2, sub: "learn scss ", finished: false },
  // ]);

  return (
    // we are going to use context api , for not to send props and to get rid of

    <todoContext.Provider value={{ list }}>
      <TododispatchContext.Provider value={{ dispatch }}>
        <AddTodo />
        <TodoList />
      </TododispatchContext.Provider>
    </todoContext.Provider>
  );
}
