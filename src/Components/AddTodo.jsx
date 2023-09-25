import todoContext from "../Context/todoContext";
import { useContext, useState } from "react";
import tododispatchContext from "../Context/tododispatchContext";

// we need hear state we will make use of useContext api

export default function AddTodo() {
  // state for input element
  const [inputtext, setInputText] = useState("");
  const { list, setList } = useContext(todoContext);
  const { dispatch } = useContext(tododispatchContext);

  return (
    <>
      <input
        type="text"
        value={inputtext}
        placeholder="Enter new to do"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "add_todo", payload: { sub: inputtext } });
          setInputText("");
        }}
      >
        ADD
      </button>
    </>
  );
}
