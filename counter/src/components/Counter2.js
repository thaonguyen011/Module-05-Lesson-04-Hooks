import useIncrement from "../hooks/useIncrement";
function Counter2() {
  let [count, setCount] = useIncrement(0);

  return (
    <div>
      <h3>Count 2: {count}</h3>
      <button onClick={() => setCount(count + 2)}>Add 2</button>
    </div>
  );
}

export default Counter2;
