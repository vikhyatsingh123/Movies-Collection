import React from 'react'
import './SuggestModal.css'
import banner from "./suggest_img.jpg"
import cross from './cross.png'

const SuggestModal = () => {
  return (
    
    <div className="modal-box" style={{"width":"68%", "margin":"3vh auto","boxShadow":"4px 4px 4px black","borderRadius":"10px","maxHeight":"fit-content","display":"flex","zIndex":'5'}}>
   <img className="banner-img-suggest" src={banner} /> 
    
         <div classname='modal-div' style={{"backgroundColor":"#F3F8FF",  "padding":"2vh" , "borderRadius":"0 10px 10px 0", "boxShadow":"4px 4px 4px black", "fontFamily":"Montserrat"}}>
        
      <p className='suggest-subheader'>Suggest Movie/Webseries</p>
      <div className='input-suggest-flexbox' >
      <div style={{"margin":"3vh 4vh"}}>
      <p className='input-header'>Name</p>
        <input className='input-box' style={{"width":"100%"}} type="text" placeholder='John'/>
    
      </div>
      
      <div style={{"margin":"3vh 4vh"}}>
      <p className='input-header'>Email</p>
        <input className='input-box' style={{"width":"100%"}}  type="text" placeholder='john@gmail.com'/>
    
      </div>
      </div>
      <div className='input-suggest-flexbox'>
      <div style={{"margin":"3vh 4vh"}}>
      <p className='input-header'>Movie Name</p>
        <input className='input-box' style={{"width":"100%"}} type="text" placeholder='JohnWick'/>
    
      </div>
      
      <div style={{"margin":"3vh 4vh"}}>
      <p className='input-header'>Genre</p>
        <input className='input-box' style={{"width":"100%"}}  type="text" placeholder='Action'/>
    
      </div>
      </div>
     
      <div style={{"margin":"4vh"}}>
      <p className='input-header'>Additional Description</p>
       <textarea className='suggest-textarea' cols="43" rows="3" placeholder=''/>
    
      </div>
      <button className='suggest-btn'>Submit</button>
    </div>
    </div>

  )
}

export default SuggestModal
