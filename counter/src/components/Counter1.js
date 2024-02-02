import useIncrement from "../hooks/useIncrement";

function Counter1() {
  let [count, increase] = useIncrement(0);

  return (
    <div>
      <h3>Count 1: {count}</h3>
      <button onClick={() => increase(count + 1)}>Add 1</button>
    </div>
  );
}

export default Counter1;
