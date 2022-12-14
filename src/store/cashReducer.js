
const initialCashState = {
    counter: 0,
  }
  
  

export const cashReducer = (state = initialCashState, action) => {
 
    switch (action.type) {
      case "ADD_ONE":
        return {
          ...state, counter: state.counter + action.payload
        }
        case "DELETE_ONE":
          return {
            ...state, counter: state.counter - action.payload
          }
          default:
            return state;
    }
  }