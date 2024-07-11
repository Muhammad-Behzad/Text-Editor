import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextArea(props) {

    const [text, settext] = useState("");

    const onchangeHandeler = (event)=>{
        settext(event.target.value);
    }

    const uppercase = ()=>{
        let upcase = text.toUpperCase();
        settext(upcase);
    }

    const lowercase = ()=>{
        let lowcase = text.toLowerCase();
        settext(lowcase);
    }

    // Changing Style Of Text ---------------


    const [style, setstyle] = useState({
        color: "black"
    })

    const blueText = ()=>{
        if(style.color === 'black'){
            setstyle({
                color: 'blue'
            })
        }
    }

    const blackText = ()=>{
        if(style.color === 'blue'){
            setstyle({
                color: 'black'
            })
        }
    }

    const boldText = ()=>{
        if(style.color === 'black'){
            setstyle({
                fontWeight: "bolder",
                color: "black"
            })
        }
        else if(style.color === 'blue'){
            setstyle({
                fontWeight: "bolder",
                color: "blue"
            })
        }
    }

    const copyText = ()=>{
        let text = document.getElementById("id1");
        navigator.clipboard.writeText(text.value);
        alert("Copied To Clipboard !");
    }

    const clearText = ()=>{
        settext("");
    }

    let mystyle = {
        color: props.mode === 'dark'?'white':'black'
    }

  return (
    <>
<div className="container">
     <div className="mb-3">
      <h1 className="Heading1" style={mystyle}>{props.heading}</h1>
      <textarea className="form-control" id="id1" value={text} style={style} onChange={onchangeHandeler} rows="10" placeholder='Enter Your Text'></textarea>
    </div>
</div>

<div className="container" id='con'>
    <button disabled = {text.length === 0} style={{backgroundColor: props.mode === 'dark'?'black':'rgb(52, 85, 192)'}} className="btn btn-primary" onClick={uppercase} id='btn'>UpperCase</button>
    <button disabled = {text.length === 0} style={{backgroundColor: props.mode === 'dark'?'black':'rgb(52, 85, 192)'}} className="btn btn-primary" onClick={lowercase} id='btn'>LowerCase</button>
    <button disabled = {text.length === 0} style={{backgroundColor: props.mode === 'dark'?'black':'rgb(52, 85, 192)'}} className="btn btn-primary" onClick={blueText} id='btn'>Blue-Text</button>
    <button disabled = {text.length === 0} style={{backgroundColor: props.mode === 'dark'?'black':'rgb(52, 85, 192)'}} className="btn btn-primary" onClick={blackText} id='btn'>Black-Text</button>
    <button disabled = {text.length === 0} style={{backgroundColor: props.mode === 'dark'?'black':'rgb(52, 85, 192)'}} className="btn btn-primary" onClick={boldText} id='btn'>Bold-Text</button>
    <button disabled = {text.length === 0} style={{backgroundColor: props.mode === 'dark'?'black':'rgb(52, 85, 192)'}} className="btn btn-primary" onClick={copyText} id='btn'>Copy-Text</button>
    <button disabled = {text.length === 0} style={{backgroundColor: props.mode === 'dark'?'black':'rgb(52, 85, 192)'}} className="btn btn-primary" onClick={clearText} id='btn'>ClearText</button>
</div>

<div className="container" id='con1'>
    <div className="box">
        <div className="subox" id='ibox'>
            <h2 className={`heading2 text-${props.mode === 'dark'?'white':'black'}`}>Text Counter</h2>
        </div>
        <div className="subox2" id='ibox'>
            <p className="para" style={{color: props.mode === 'dark'?'white':'black'}}><span className="spn" style={{color: props.mode === 'dark'?'white':'black'}}>{text.split(" ").filter((element)=>{return element.length !==0}).length}</span> Words & <span className="spn" style={{color: props.mode === 'dark'?'white':'black'}}>{text.length}</span> Characters</p>
        </div>
    </div>
    <div className="box">
        <div className="subox" id='ibox'>
            <h2 className={`heading2 text-${props.mode === 'dark'?'white':'black'}`}>Time To Read Text</h2>
        </div>
        <div className="subox2" id='ibox'>
            <p className="para" style={{color: props.mode === 'dark'?'white':'black'}}><span className="spn" style={{color: props.mode === 'dark'?'white':'black'}}>{0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length}</span> Minutes !</p>
        </div>
    </div>
</div>
    </>
  )
}

TextArea.propTypes = {
    heading: PropTypes.string.isRequired
}