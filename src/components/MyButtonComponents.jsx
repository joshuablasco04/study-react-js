import React, { useState } from 'react'

const MyButtonComponents = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Joshua');
  const [isChecked, setIsChecked] = useState(false);
  const [fruits, setFruits] = useState(['mango', 'apple', 'orange']);
  const [people, setPeople] = useState({name: 'Joshua', age: 31, address: 'San Juan City'});
  const cities = ['Manila', 'Cebu City', 'Bacolod', 'Davao City'];
  const newCities = cities.filter(city => city !== 'Manila');
  
  const person =[
    {
      id: 0,
      name: 'Joshua Blasco',
      age: 31
    },
    {
      id: 1,
      name: 'Jacob Blasco',
      age: 12
    },
    {
      id: 2,
      name: 'David Blasco',
      age: 16
    },
    {
      id: 3,
      name: 'Samuel Blasco',
      age: 43
    },
    {
      id: 4,
      name: 'Jesse Blasco',
      age: 37
    },
  ]

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

 

  const handleClick = () => {
    alert('You Clicked Me!')
  }

  const handleInput = (e) => {
    console.log(e.target.name)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.fname.value)
    console.log(e.target[1].value)
  }

  const handleCheck = () =>{
    setIsChecked(!isChecked)
  }

  const handleAddFruit= () => {
    setFruits([...fruits, 'Pineapple'])
  };

  const handleRemoveFruit = (fruitIndex) => {
    const filteredFruits = fruits.filter((fruit, index) => 
      index !== fruitIndex
    );
    setFruits(filteredFruits);
  }
 

  return (
    <div className='ml-10 my-2'>
      <h1>Count: {count} </h1>
      <button className='cursor-pointer bg-blue-200 my-2 rounded p-2 ' onClick={handleIncrement}>Increment</button>
      <br />
      <button className='cursor-pointer bg-blue-200 rounded p-2' onClick={handleDecrement} >Decrement</button>
     
      <hr />
      <div>
        <label htmlFor="">Show</label>
        <input type="checkbox" onChange={handleCheck} checked = {isChecked} />
      </div>

      <div>
        <button onClick={handleAddFruit} className='border-2 p-2 rounded-full bg-green-200'>Add Fruit</button>
       
        <ul>
          {isChecked && fruits.map((fruit, index) => {
            return (
              <div key={index}>
                <li >
                  {fruit}
                </li>
                <button onClick={()=> handleRemoveFruit(index)} className='border-2 p-2 rounded-full bg-red-200'>Remove Fruits</button>
              </div>
            )
          })}
        </ul>
      </div>
      
      <ul>
        {newCities.map((city, index) => (
          <li key={index} className='border-black-200'>
            {city}
          </li>
        ))}     
      </ul>
      
      {person.length > 0 && <div>
           <table className="w-full">
        <thead className='bg-gray-50 border-2 border-gray-200'>
          <tr>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>ID</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>NAME</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>AGE</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {person.map(data => 
            <tr className='p-3 text-sm tracking-wide text-left border-2 border-green-200' key ={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.age > 20 ? "Old" : "Young"}</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>} 
      
      <button className='mt-3 border-2 p-2 rounded-full font-bold tracking-wider border-primary bg-red-200 hover:bg-red-300' onClick={handleClick}>Click Me</button>
      <br />
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input type="text" className='border-2 mt-2' name= "fname" placeholder='First Name'/>
          <br />
          <input type="text" className='border-2 mt-2' name= "lname" placeholder='Last Name'/>
        </div>
        <button className='border-2' type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default MyButtonComponents