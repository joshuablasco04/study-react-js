import { useState } from "react";

import { FaRegHeart, FaHeart  } from "react-icons/fa";

export const HeartIcon = ({onClick}) => {

    const [heart , setHeart] = useState(false)

    const handleReact = ()=> {
        setHeart(!heart)
        onClick()
    }

  return (
    <div>
        <div  className="bg-blue-300">
           {!heart ? <FaRegHeart className="text-red-500 text-5xl cursor-pointer" onClick={handleReact}/> : <FaHeart className="text-red-500 text-5xl cursor-pointer" onClick={handleReact}/>}
            
        </div>
        
    </div>
  )
}
