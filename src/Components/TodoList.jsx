import { useContext } from "react";
import todoContext from "../Context/todoContext";
import TodoBox from "./TodoBox";

export default function TodoList() {
  const { list, setList } = useContext(todoContext);
  return (
    <>
      {list.map((el) => {
        return (
          <TodoBox
            key={el.id}
            data={el.sub}
            checkIt={(data) => {
              const newList = list.map((l) => {
                if (el.id == l.id) {
                  el.finished = data;
                }
                return l;
              });
              setList(newList);
            }}
            updateIt={(data) => {
              const newList = list.map((l) => {
                if (el.id == l.id) {
                  el.sub = data;
                }
                return l;
              });
              setList(newList);
            }}
          />
        );
      })}
    </>
  );
}
