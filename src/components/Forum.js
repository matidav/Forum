import React, { useState } from 'react'
import MainPost from './MainPost'
import Reply from './Reply'

const Forum = () => {
  const [replies, repliesSetter] = useState([])
  const [name, nameSetter] = useState('')
  const [post, postSetter] = useState('')
  return (
    <>
      <MainPost 
        onNameChange = {e => nameSetter(e.target.value)} 
        onPostChange = {e => postSetter(e.target.value)} 
        onSubmission = {() => { 
          if (!(name === '' || post === '')) {  
            repliesSetter([...replies,<Reply names = {name} posts = {post} level = {0} key = {Math.random()*100}/> ])
            nameSetter('')
            postSetter('')
          }
        }}/>
      {replies}
    </>
  )
}

export default Forum