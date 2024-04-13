import React, { useEffect } from 'react'
import "../App.css"
import VideoCard from '../components/VideoCard'
const Home = () => {
  
  // useEffect(()=>{
  //   fetch(' https://www.googleapis.com/youtube/v3/search?key=AIzaSyDPQQ1eS7mVo3Jsb9HlEMtmuFj5wihgdEA&channelid=UCfYHvYyFICHwHVO9lHwmiig&snippet,id&order=date&maxResults=50&pageToken=CDIQAA').then((res)=>res.json()).then((response)=>{
  //     console.log(response))
  // },[]).
  return (
    <div className='home-container'>
<div className="d-flex justify-content-evenly">
<VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/xCO_Bo-2sWI?si=-jITA0n7rqTHh09_"/>
<VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/_ucD8sc30xY?si=nL7eyMN6w1OjKYLF"/>
<VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/8rIviI0ZKNA?si=R66G6lar6zRXrVWA"/>

    </div>
    <div className="d-flex justify-content-evenly">
<VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/SvcCriKKBaA?si=On3-PeElNv65drxQ"/>
<VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/uA3gatbn4dI?si=twEMTp3_xxRBq5p9"/>
<VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku"/>

    </div>
    <div className="d-flex justify-content-evenly">
<VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/sGskENRWXTU?si=mja6plRjGvdBgGHa"/>
<VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku"/>
<VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/lOSPQVZLixY?si=cE4ng7hSbiMJ-RTr"/>

    </div>
    </div>
    // AIzaSyDPQQ1eS7mVo3Jsb9HlEMtmuFj5wihgdEA
    //  https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2C%20contentDetails&channelId=UCfYHvYyFICHwHVO9lHwmiig&key=AIzaSyAuC5AyTs4nbWPhAJDuStvDSSA8MuJIEmA
    //  https://www.googleapis.com/youtube/v3/search?key=AIzaSyDPQQ1eS7mVo3Jsb9HlEMtmuFj5wihgdEA&channelid=UCfYHvYyFICHwHVO9lHwmiig&snippet,id&order=date&maxResults=50&pageToken=CDIQAA
  )


}

export default Home
