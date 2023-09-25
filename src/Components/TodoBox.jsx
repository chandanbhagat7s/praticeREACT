import React, { useState } from "react";

export default function TodoBox({ data, updateIt, checkIt, deleteItem }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(data);
  const [isFinished, setIsFinished] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        checked={isFinished}
        onChange={() => {
          checkIt(!isFinished);
          setIsFinished(!isFinished);
        }}
      />
      {isEdit ? (
        <>
          <input
            value={text}
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </>
      ) : (
        data
      )}
      <button
        onClick={() => {
          updateIt(text);
          setIsEdit(!isEdit);
        }}
      >
        {isEdit ? "save" : "edit"}
      </button>
      <button
        onClick={() => {
          deleteItem();
        }}
      >
        Delete
      </button>
    </div>
  );
}
