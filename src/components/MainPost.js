import React, { useState } from 'react'

const MainPost = (props) => {
   const { onNameChange, onPostChange, onSubmission } = props
    
    return(
    <form className = 'main-post'>
      <div className = 'mb-3'>
    <label className = 'form-label'>Name:</label>
    <input className = 'form-control' onChange = {onNameChange}/>
    </div>
    <br/>
    <label className = 'form-label'>Post:</label>
    <textarea className = 'form-control' onChange = {onPostChange}/>
    <br/>
    <button type="reset" className ="btn btn-primary" onClick = {onSubmission}>
      Submit  
    </button>
    </form> 
    )








}

export default MainPost