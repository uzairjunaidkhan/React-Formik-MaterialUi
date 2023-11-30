import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByValue } from './redux/slicies/index'


function App() {
  const count = useSelector((state)=> state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Count is {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(incrementByValue(count))}>Increment By Value</button>
    </div>
  );
}

export default App;
