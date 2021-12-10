import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
         console.log("Uppercase was clicked" + text);
         let newText = text.toUpperCase(); 
         setText(newText);
         props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLowClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase(); 
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
   }
   const handleClick = ()=>{

    let newText = ''; 
    setText(newText);
    props.showAlert("Text Cleared", "success");
    }
    const handleCopyClick = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
   }
   
    const [text, setText] = useState('Enter text here');

    // text = "new text";  wrong way
    // setText("new text"); right way
    return (
        <>
        <div div className ="container mx -100">
        <div className="container" style ={{color:props.mode==='light'?'black':'white'}}  >
         <h1>{props.heading}</h1>
        <div className="mb-3">
       
        <textarea className="form-control"  style ={{background:props.mode==='light'?'white':'grey' , color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClick} >Clear</button>
        <button className="btn btn-primary mx-3 " onClick={handleCopyClick} >Copy Text</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className ="container my-3" style ={{color:props.mode==='light'?'black':'white'}}  >
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
        </div>
        </div>
        </>
    )
}
