import { useMemo, useState } from "react";

export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

    const calculate=(num)=>{
        console.log("Running calculation....")
        let res=0
        for(let i=0;i<1000000;i++){
            res+=num
        }
        return res
    }

    const memoizedValue=useMemo(()=>{
           return calculate(count)
    },[count])


  return (
    <div>
      <h3>useMemo Hook Example</h3>
      <h4>Result:{memoizedValue} </h4>
      <h5>Count: {count}</h5>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
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
