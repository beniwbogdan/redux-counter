
const defaultState ={

}

export const customerReducer = (state = defaultState, action) => {
 
    switch (action.type) {
      case "ADD_CUSTOMER":
        return {
          ...state, counter: state.counter + action.payload
        }
        case "DELETE_CUSTOMER":
          return {
            ...state, counter: state.counter - action.payload
          }
          default:
            return state;
    }
  }
  