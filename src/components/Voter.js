import React, { useState } from 'react'

const Voter = () => {
    const[likes, likesSetter] = useState(0)
     return (
         <div className = 'voter' >
            <input className = 'higher-button' type = 'image' src ='https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-up-512.png' onClick = {() => likesSetter(likes + 1)}/>
            {likes}
            <input className = 'higher-button' type = 'image' src = 'https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-down-512.png' onClick = {() => likesSetter(likes - 1)} />


        </div>
     )


}    
export default Voter