import { Todo } from "@/app/page";
import React from "react";

function TodoBlock({
  todo,
  toggleTodo,
  deleteTodo,
}: {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
  return (
    <li
      key={todo.id}
      className={`flex items-center justify-between p-3 border rounded-md shadow-sm transition-all 
        ${todo.completed ? "border-gray-300 opacity-85" : "border-gray-200"}`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className={`mr-3 h-5 w-5 ${
            todo.completed ? "text-green-500" : "text-blue-500"
          }`}
        />
        <span
          className={`${
            todo.completed
              ? "line-through text-gray-500 italic font-medium"
              : ""
          }`}
        >
          {todo.text}
        </span>
        {todo.completed && (
          <span className="ml-2 text-xs px-1.5 py-0.5 bg-green-100 text-green-700 rounded-full">
            완료
          </span>
        )}
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        삭제
      </button>
    </li>
  );
}

export default TodoBlock;
