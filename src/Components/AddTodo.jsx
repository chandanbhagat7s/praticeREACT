import todoContext from "../Context/todoContext";
import { useContext, useState } from "react";

// we need hear state we will make use of useContext api

export default function AddTodo() {
  // state for input element
  const [inputtext, setInputText] = useState("");
  const { list, setList } = useContext(todoContext);

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
          setList([
            ...list,
            { id: list.length + 1, sub: inputtext, finished: false },
          ]);
          setInputText("");
        }}
      >
        ADD
      </button>
    </>
  );
}
