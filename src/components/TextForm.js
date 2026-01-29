import React , {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
   const handleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE","success");
    }
    const handleLoClick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LOWERCASE","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
      
    } 
    const handleCaClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        let arr=[];
        arr=newText.split(" ");

       for(let i=0;i<arr.length;i++)
       {
        const str = arr[i];
        arr[i] = str.charAt(0).toUpperCase() + str.slice(1);

        }
        setText(arr.join(" "));
        props.showAlert("Converted to CAMELCASE","success");
    }
    const handleClClick=()=>{
        setText("");
        props.showAlert("CLEARED TEXT","success");
        
    } 
    

  return (
      <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}} >
    <h1>{props.heading}</h1>
  <div className="form-group" >
    <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox"  rows="8" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}} ></textarea>
  </div>
  <button className="btn btn-primary my-3 mx-3" onClick={ handleUpClick } >Convert to UpperCase</button>
  <button className="btn btn-primary " onClick={ handleLoClick}>Convert to LowerCase </button>
  <button className="btn btn-primary my-3 mx-3 " onClick={ handleCaClick }>Convert to CamelCase</button>
  <button className="btn btn-primary  " onClick={ handleClClick }>Clear</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      {text.length===0?"0":text.split(" ").length} words and {text.length} characters 
     <div>Aproxx {Number((Math.floor((0.005*text.split(" ").length) * 1000) / 1000).toFixed(3)) } minutes required to read.</div> 
     
      <h1 className='my-2'>Preview</h1>
       {text}
       </div>
   
    </>
  )
}
