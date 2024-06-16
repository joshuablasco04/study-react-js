import { useState } from 'react';
import {CgNametag, CgMenu} from 'react-icons/cg';


const Nav = () => {

const [toggle, setToggle] = useState(false);

  const handleMenu = ()=>{
    setToggle(!toggle)
  };

  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row">
          <div className="text-white font-mono text-3xl flex items-center ">
            
            <CgNametag/>
            BLASCO
          </div>
          <div className="space-x-4">
            <div className='ssm:hidden md:block space-x-2'>
              <a href="#" className="text-white hover:bg-indigo-300 rounded-full px-5 py-2 text-xl ">Skills</a>
              <a href="#" className="text-white hover:bg-indigo-300 rounded-full px-5 py-2 text-xl">Projects</a>
              <a href="#" className="text-white hover:bg-indigo-300 rounded-full px-5 py-2 text-xl">Testimonials</a>
            </div>
            
            
              <CgMenu/>              
           
            
          </div>
      </div>

      <div>
        <div> 
          <ul className='text-white text-xl ml-10 md:hidden'>
            <li className='hover:text-blue-900 w-20 cursor-pointer'>Skills</li>
            <li className='hover:text-blue-900 w-20 my-3 cursor-pointer'>Project</li>
            <li className='hover:text-blue-900 w-20 cursor-pointer'>Testimonilas</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav