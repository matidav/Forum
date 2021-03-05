import React, { useState } from 'react'
import Voter from './Voter'

const toggle = val => !val

const Reply = ({names, posts, level, keyNum}) => {
    const [replyName, replyNameChanger] = useState('')
    const [replyPost, replyPostChanger] = useState('@' + names)
    const [post, postSetter] = useState(false)
    const [replies, setReplying] = useState([])
    const [keyNums, keyNumSetter] = useState(keyNum)
    return(
        
        <div className = 'reply' >
            <Voter/>
            
            <div className = 'reply-name'>{names}</div>
            <div className = 'reply-post'>{posts}</div>
        {(!(level === 2)) ?
            <button className = 'btn btn-outline-secondary' onClick = {() => postSetter(toggle(post))}>
                Reply
            </button>: ""}
            <br/>
         {(post) ?
         <>
         <form>
             <div className ="mb-3">
         <div className = 'form-label'>Name:</div>
         <input  className = 'form-control' onChange = {e => replyNameChanger(e.target.value)}/>
         <br/>
         <label className = 'form-label'>Post:</label>
         <textarea className = 'form-control' defaultValue = {'@' + names} type = 'text'  onChange = {e => replyPostChanger(e.target.value)}>
         </textarea>
         <button className = 'btn btn-outline-secondary' onClick = {e => {
            if (replyName === "" || replyPost === "") {
               } else {  
                keyNumSetter(keyNums + 1)
                console.log('keyNums ' + keyNums)     
                setReplying([...replies, <Reply names = {replyName}  posts = {replyPost} level = {level + 1} key = {Math.random()} />])   
                postSetter(false)
           
           }}}>    
           Submit  
         </button>
         </div>
         </form> 
         </>: ""
        }  
             {replies}    
        </div>


    )




}
export default Reply