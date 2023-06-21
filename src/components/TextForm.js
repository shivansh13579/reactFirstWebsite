import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClearClick=()=>{
        let newText = ''
        setText(newText)
        props.showAlert("Clear all Text","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleCopyText=()=>{
        const text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
    }
    const handleExtraSpaces=()=>{
       let newText = text.split(/[]+/);
       setText(newText.join(""))
       
    }

    const [text, setText] = useState('Enter text here');
  return (
<>
<div className='container' style={{color:props.mode==='dark'?'white':'#331861'}}>
        <h2 className='mb-2'>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#8364b5':'white',color:props.mode==='dark'?'white':'#331861'}} id="myBox" rows="6"></textarea>
    </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#8364b5'}}>
        <h3>Your text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
</>
  )
}
