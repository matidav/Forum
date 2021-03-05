import React, { useState } from 'react'
import MainPost from "./MainPost"
import Reply from "./Reply"

const Forum = () => {
   const [replies, repliesSetter] = useState([])
   const [name, nameSetter] = useState('')
   const [post, postSetter] = useState('')
   const [keyNum, keyNumSetter] = useState(0)


    return (
      <>
        <MainPost onNameChange = {e => nameSetter(e.target.value)} 
        onPostChange = {e => postSetter(e.target.value)} 
        onSubmission = {e => { 
            if (name === "" || post === "") {
            } else {   
            console.log(keyNum)
            repliesSetter([...replies,<Reply names = {name} posts = {post} level = {0} keyNum = {Math.random()*100} key = {keyNum}/> ])
            nameSetter('')
            postSetter('')
            }
        }}/>
        {replies}
        </>




    )
}

export default Forum