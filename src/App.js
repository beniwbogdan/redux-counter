import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App() {
const dispatch = useDispatch();

  const addOne=()=>{
    dispatch();

  }

  const minusOne=()=>{
    dispatch();
  }

  return (
    <div className="App">
      <div>{counter}</div>
      <div>
        <button onClick={()=>addOne()}>PLUS + </button>
        <button onClick={()=>minusOne()}>MINUS - </button>
      </div>
    </div>
  );
}

export default App;
