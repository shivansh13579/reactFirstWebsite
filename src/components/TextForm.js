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
    }
    const handleExtraSpaces=()=>{
       let newText = text.split(/[]+/);
       setText(newText.join(""))
       
    }

    const [text, setText] = useState('Enter text here');
  return (
<>
<div className='container' style={{color:props.mode==='dark'?'white':'#331861'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#331861'}} id="myBox" rows="8"></textarea>
    </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#331861'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to textBox above to preview it here"}</p>
    </div>
</>
  )
}
