import { increment,decrement } from "../constants/couter"

const increaseAction = {
    type: 'INCREASE',
  }; 
  
  const decreaseAction = {
    type: 'DECREASE'
  };
export default function counter(state = 0, action) {
    switch (action.type) {
      case  increment:
        return state + 1
      case decrement:
        return state - 1
      default:
        return state
    }
  }