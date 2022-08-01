import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App() {
const dispatch = useDispatch();
const counter = useSelector(elFromInitialState=>elFromInitialState.counter)

  const addOne=()=>{
    dispatch({type:"ADD_ONE",payload:1});

  }

  const minusOne=()=>{
    dispatch({type:"DELETE_ONE",payload:1});
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
