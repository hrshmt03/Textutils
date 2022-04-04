import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        console.log("uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //setText('new text2');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#1e262a'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode==='dark'?'white':'#1e262a' }} id="myArea" rows="9"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3 my-2" onClick={handleLowClick}>Convert to lowercase</button>
        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'#1e262a'}} >
         <h1>Text Summary</h1>
         <p>{text.split(" ").length} words and {text.length}</p>
         <p>{0.008*text.split(" ").length}</p>
         <h2>Preview</h2>
         <p>{text}</p>
        </div>
      </>
    )
}
