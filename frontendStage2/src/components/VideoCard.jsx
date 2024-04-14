import React, { useState } from 'react'
import "../App.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const VideoCard = (props) => {
  
 
  return (
    <>
    <div className='shadow-lg p-3 mb-5'>
      <div className="card m-3" style={{width: "18rem", height:"20rem"}}>
  <img src={props.imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title.slice(0,50)}</h5>
    {/* <p className="card-text">nkhnjhui</p> */}
    <button  id={props.id} className="btn btn-success" onClick={props.handleClick}>PLAY<PlayArrowIcon/></button>
  </div>
</div>
    </div>
   
    </>
  )
}

export default VideoCard
