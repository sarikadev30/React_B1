import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    console.log("buttonClicked count is Updating");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h3>Count : {count}</h3>
      <Child onclick={handleClick} />
      <input
        placeholder="Write Something..."
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <p>Text: {text}</p>
    </div>
  );
}
