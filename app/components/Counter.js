"use client";
import {useState} from "react";
export default function Counter({users}) {
  const [counter, setCounter] = useState(0);
  function handleCounterClick() {
    setCounter((c) => c + 1);
  }
  console.log(users);
  return (
    <div>
      <button onClick={handleCounterClick}>{counter}</button>
      <p>{users.length} users are here</p>
    </div>
  );
}
