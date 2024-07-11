import React from 'react'
import PropTypes from 'prop-types'

export default function About(props) {
  return (
    <>

    <h1 className='AboutHead' style={{color: props.mode === 'dark'?'white':'black'}}>{props.head}</h1>
      <div className="accordion my-3" id="accordionExample">
  <div className={`accordion-item text-${props.mode === 'dark'?'white':'black'}`} style={{backgroundColor: props.mode === 'dark'?'black':'white'}}>
    <h2 className="accordion-header">
      <button className={`accordion-button text-${props.mode === 'dark'?'white':'black'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode === 'dark'?'rgb(47, 97, 109)':'rgb(189, 189, 189)'}}>
        Edit And Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Text-Editor is a versatile tool designed to enhance your text editing experience. Whether you're a content creator, student, or professional, this app offers a range of powerful features to elevate your productivity
      </div>
    </div>
  </div>
  <div className={`accordion-item text-${props.mode === 'dark'?'white':'black'}`} style={{backgroundColor: props.mode === 'dark'?'black':'white'}}>
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed text-${props.mode === 'dark'?'white':'black'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode === 'dark'?'rgb(47, 97, 109)':'rgb(189, 189, 189)'}}>
        Features
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      ✨ Text Transformation: Convert your text to upper case or lower case with a single click.<br></br>
      🎨 Color Customization: Change the color of your text to highlight important points or enhance readability.<br></br>
      💪 Text Styling: Make your text bold effortlessly for emphasis and clarity<br></br>
      📋 Clipboard Functionality: Easily copy your text to the clipboard for seamless sharing and pasting across platforms
      </div>
    </div>
  </div>
  <div className={`accordion-item text-${props.mode === 'dark'?'white':'black'}`} style={{backgroundColor: props.mode === 'dark'?'black':'white'}}>
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed text-${props.mode === 'dark'?'white':'black'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode === 'dark'?'rgb(47, 97, 109)':'rgb(189, 189, 189)'}}>
        Free To Use
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Built this app with simplicity and functionality in mind, ensuring that it meets your everyday editing needs effectively. Whether you're drafting documents, creating content, or preparing presentations, my Text Editor app is here to streamline your workflow. It is also Free to use.
      </div>
    </div>
  </div>
</div>
    </>
  )
}

About.propTypes = {
  head: PropTypes.string.isRequired
}
