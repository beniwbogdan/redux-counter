import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App() {
const dispatch = useDispatch();
const counter = useSelector(elFromInitialState=>elFromInitialState.cash.counter)
const customer = useSelector(elFromInitialState=>elFromInitialState.customers.customer)

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
      {customer}
    </div>
  );
}

export default App;
