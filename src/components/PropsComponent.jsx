

const PropsComponent = ({counting , handleIncrement, handleDecrement}) => {
    
  return (
    <div>
        <h1>Count: {counting} </h1>
        <button onClick={handleIncrement}>Increment</button>
        <br />
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default PropsComponent