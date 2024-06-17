import { useReducer } from "react";

const reducer = (quantity, action) => {
    switch (action.type) {
        case 'increment': {
            return {count : quantity.count + 1}
        }
        case 'decrement': {
            return {count : quantity.count - 1}
        }
        case 'reset': {
            return {count : 0}
        }
    }
}


const Reducer = () => {

    const initialQuantity = {count: 0}

    const [quantity, dispatch] = useReducer(reducer, initialQuantity)

    const handleIncrement = () => {
        dispatch({type: 'increment'})
    };
    
    const handleDecrement = () => {
        dispatch({type: 'decrement'})
    };

    const handleReset = () => {
        dispatch({type: 'reset'})
    };


  return (
    <div>
        <h1>Count: {quantity.count}</h1>
       <button onClick={handleIncrement}>Increment</button>
       <button onClick={handleDecrement}>Decrement</button>
       <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Reducer