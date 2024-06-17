import { useState } from "react"
import Main from "./components/Main"
import MyButtonComponents from "./components/MyButtonComponents"
import Nav from "./components/Nav"
import NavbarComponent from "./components/NavbarComponent"
import PropsComponent from "./components/PropsComponent"
import ChildComponent from "./components/ChildComponent"
import { HeartIcon } from "./components/HeartIcon"
import ExpandableTextComponent from "./components/ExpandableTextComponent"
import UseEffectComponent from "./components/UseEffectComponent"
import ReactHooks from "./components/ReactHooks"
import ThemeProvider from "./components/ThemeProvider"
import ThemeButton from "./components/ThemeButton"
import Reducer from "./components/Reducer"


function App() {

const [counting , setCounting] = useState(0);

  const handleIncrease = () => {
    setCounting((prev) => prev + 1);
  }

  const handleIncrement = () => {
    setCounting((prev) => prev + 1)
  }

  const handleDecrement = () => {
    setCounting((prev) => prev - 1)
  }

  return (
    <>
      <ThemeProvider>
        <ThemeButton/>
      </ThemeProvider>
      <Reducer/>   
      {/* <ReactHooks/>
      <UseEffectComponent/>
      <ExpandableTextComponent maxChars={20}>
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
      </ExpandableTextComponent>
      <HeartIcon onClick={()=> console.log('Clicked')}/>
      <h1>Count: {counting} </h1>
      <button onClick={handleIncrease} className="border-2 p-2 rounded-full bg-green-500">Increase</button>
      <Main/>      
      <MyButtonComponents/>
      <NavbarComponent/>
      <PropsComponent counting={counting} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      <ChildComponent>
        <h1>This is a heading!</h1>
        <p>This is a sample paragraph..</p>
      </ChildComponent> */}

    </>
  )
}

export default App
