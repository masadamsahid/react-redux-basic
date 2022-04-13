import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter);

  const increment = () => {
    dispatch({type: 'INC'})
  }
  const decrement = () => {
    dispatch({type: 'DEC'})
  }

  const addBy = () => {
    dispatch({type: 'ADD', payload: 10})
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment} >+</button>
      <button onClick={decrement} >-</button>
      <button onClick={addBy}>Add by 10</button>
    </div>
  );
}

export default App;
