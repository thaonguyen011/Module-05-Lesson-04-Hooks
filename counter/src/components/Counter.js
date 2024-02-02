import useIncrement from "../hooks/useIncrement";

function Counter({ unit }) {
  let [count, increase] = useIncrement(0);

  return (
    <div>
      <h3>
        Count {unit}: {count}
      </h3>
      <button onClick={() => increase(count + unit)}>Add {unit}</button>
    </div>
  );
}

export default Counter;
