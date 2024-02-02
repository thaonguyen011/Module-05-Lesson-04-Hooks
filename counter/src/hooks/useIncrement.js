import {useState} from 'react'

function useIncrement(base) {
  const [count, setCount] = useState(base);

  const increase = (result) => {
    setCount(result);
  }
  return [count, increase];
}

export default useIncrement

