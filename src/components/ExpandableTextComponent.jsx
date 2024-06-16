import { useState } from "react"


const ExpandableTextComponent = ({children, maxChars}) => {
    const [fullText, setFullText] = useState(false);

    if(children.length <= maxChars) return <div>{children}</div>

    const handleFullText = () => {
        setFullText(!fullText)
    }

  return (
    <div>
        {fullText ? children : (children.substring(0, maxChars))}
        ...
        <br />
        <button onClick={handleFullText} className="border-2 p-2 bg-gray-500">{!fullText ? 'Show More' : 'Show Less'}</button>
    </div>
  )
}

export default ExpandableTextComponent