import { useState } from 'react';
import {CgNametag, CgMenu} from 'react-icons/cg';
import style from "./Nav.module.css"


const Nav = () => {

const [toggle, setToggle] = useState(false);

  const handleShowMenu = ()=>{
    setToggle(!toggle)
  };

  return (
    <>
      <div className="flex  justify-between p-10 lg:flex-row ">
          <div className="text-white font-mono text-3xl flex items-center md:flex-col">            
            <div>
              <div className='flex flex-row items-center mb-5'>
                <CgNametag/>
                <h1>BLASCO</h1>   
              </div>
            
                {toggle ? 
                      <div className='text-3xl flex flex-col md:hidden'>
                        <a href="#" className="text-white hover:bg-indigo-300 rounded-full px-5 py-2 text-xl ">Skills</a>
                        <a href="#" className="text-white hover:bg-indigo-300 rounded-full px-5 py-2 text-xl">Projects</a>
                        <a href="#" className="text-white hover:bg-indigo-300 rounded-full px-5 py-2 text-xl">Testimonials</a>
                      </div> 
                    : <div></div>
                  }                
            </div>
          </div>
          <div className=" ">            
            < CgMenu className='md:hidden text-3xl cursor-pointer hover:scale-125' onClick={handleShowMenu}/>
            <div>              
              <div className='ssm:hidden md:block space-x-2'>
                <a href="#" className="text-white hover:bg-indigo-300 rounded-full px-5 py-2 text-xl ">Skills</a>
                <a href="#" className="text-white hover:bg-indigo-300 rounded-full px-5 py-2 text-xl">Projects</a>
                <a href="#" className="text-white hover:bg-indigo-300 rounded-full px-5 py-2 text-xl">Testimonials</a>
              </div>
                     
            </div>
      
          </div>
      </div>

    </>
  )
}

export default Nav