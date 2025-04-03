"use client";

import TodoBlock from "@/components/TodoBlock";
import { useState } from "react";

// todo의 예시 객체
// {
//   id: 1,
//   text: "할일 1",
//   completed: false,
// }

export interface Todo {
  // id: number;
  // text: string;
  // completed: boolean;
}

export default function Home() {
  // todos라는 이름의 state를 만들고 타입을 할당하세요
  // ---
  // 여기를 채우세요
  // ---

  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      // ---
      // 여기를 채우세요
      // ---
      setInputValue("");
    }
  };

  const toggleTodo = (id: number) => {
    // ---
    // 여기를 채우세요
    // ---
  };

  const deleteTodo = (id: number) => {
    // ---
    // 여기를 채우세요
    // ---
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">할일 목록</h1>

      <div className="w-full max-w-md mb-6 flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          // onKeyDown={(e) => e.key === "Enter" &&
          // ---
          // 여기를 채우세요
          // ---
          //}
          className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="할일을 입력하세요"
        />
        <button
          // onClick={
          // ---
          // 여기를 채우세요
          // ---
          //}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
        >
          추가
        </button>
      </div>

      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">진행중</h2>
        <ul className="mb-6 space-y-2">
          {/* {todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <TodoBlock
                key={todo.id}
                // ---
                // 여기를 채우세요
                // props 내리기
                // ---
              />
            ))} */}
        </ul>

        <h2 className="text-lg font-semibold mb-2">완료됨</h2>
        <ul className="space-y-2">
          {/* {todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <TodoBlock
                key={todo.id}
                // ---
                // 여기를 채우세요
                // props 내리기
                // ---
              />
            ))} */}
        </ul>
      </div>
    </div>
  );
}
