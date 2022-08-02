
const initialCustomerState ={
customers:[],
}

export const customerReducer = (state = initialCustomerState, action) => {
 
    switch (action.type) {
      case "ADD_CUSTOMER":
        return {
          ...state, counter: state.customers + action.payload
        }
        case "DELETE_CUSTOMER":
          return {
            ...state, counter: state.customers - action.payload
          }
           default:
            return state;
    }
  }
  