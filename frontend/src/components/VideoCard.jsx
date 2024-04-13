import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const VideoCard = (props) => {
  return (
    <div>
      <div className="card m-3" style={{width: "18rem"}}>
  <img src="props.image" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href="props.url" className="btn btn-success">PLAY<PlayArrowIcon/></a>
  </div>
</div>
    </div>
  )
}

export default VideoCard
