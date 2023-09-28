import { useContext } from "react";
import todoContext from "../Context/todoContext";
import TodoBox from "./TodoBox";
import tododispatchContext from "../Context/tododispatchContext";

export default function TodoList() {
  // const { list, setList } = useContext(todoContext);
  // after reducer no need to getout setList okk
  const { list } = useContext(todoContext);
  const { dispatch } = useContext(tododispatchContext);
  const checkit = (data, el) => {
    dispatch({ type: "finish_todo", payload: { todo: el, finished: data } });
  };

  const updateIt = (data, el) => {
    dispatch({ type: "update_todo", payload: { todo: el, sub: data } });
  };
  const deleteIt = (el) => {
    dispatch({ type: "delete_todo", payload: { todo: el } });
  };

  return (
    <>
      {list.map((el) => {
        return (
          <TodoBox
            key={el.id}
            data={el.sub}
            checkIt={(data) => checkit(data, el)}
            updateIt={(data) => {
              updateIt(data, el);
            }}
            deleteItem={() => {
              deleteIt(el);
            }}
          />
        );
      })}
    </>
  );
}
