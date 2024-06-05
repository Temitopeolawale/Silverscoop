import React from 'react'

function But({text,func}) {
  return (
    <div >
      <button
      style={{
        backgroundColor:"red",
        border:"none",
        color:"white",
        borderRadius:"15px",
        width:'100px',
        padding:'10px'
    }} onClick={func}>{text}</button>
    </div>
  )
}

export default But
