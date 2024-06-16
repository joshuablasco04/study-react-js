import { useEffect, useRef, useState } from "react"


const UseEffectComponent = () => {
    
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    // useEffect(()=> {
    //    fetch('https://jsonplaceholder.typicode.com/todos')
    //    .then(res=> res.json())
    //    .then(data=> {
    //     setTodos(data)
    //    })
    // }, []);

    useEffect(()=>{
        console.log('Count:' + count)
    }, [count])

    const handlePlus = () => {
        setCount((prev) => prev + 1)
    }

  return (
   <>
    <button onClick={handlePlus} className="border-2 p-2 bg-blue-300">Increment</button>
    <ul>
        {todos.map(todo => 
            <li key={todo.id}>
                {todo.title}
            </li>        
        )}
    </ul>
   
   </>
  )
}

export default UseEffectComponent