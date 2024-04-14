import React, { useEffect, useState } from 'react'
import "../../App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import VideoCard from "../../components/VideoCard"
const Saving = () => {
  const [items,setItems]=useState([]);
  const[display,setDisplay]=useState(false);
  useEffect(()=>{
    const url = 'https://youtube-media-downloader.p.rapidapi.com/v2/channel/videos?channelId=UCnMn36GT_H0X-w5_ckLtlgQ';
const options = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': 'c8a99fd66dmsh8b5682c734e1434p135c62jsna38c5e036e95',
		'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
	}
};

try {
  
	const response =  fetch(url, options).then((res)=>res.json()).then((res)=>setItems(res.items))
setDisplay(true);
} catch (error) {
	console.error(error);
}
      
  },[])
  const [newsrc,setNewSrc] = useState("https://www.youtube.com/embed/UY8vui1opcY");
 
  const[id,setId]=useState("UY8vui1opcY");
  const[Index,setIndex]=useState(-1);
  function handleClick(e){
    e.preventDefault();
    console.log(e.target.id);
    setId(e.target.id)
    console.log(id);
    document.querySelector(".play").style.display="block";
    setNewSrc(`https://www.youtube.com/embed/${e.target.id}?autoplay=1`)
    e.preventDefault();
    console.log(newsrc)
    setDisplay(false);
    console.log(document.querySelector("iframe"))
  }
  return (
    <div className='api'>
       <div className="play"  >
    <iframe width="560" height="315" src={newsrc}  frameborder="0" allowFullScreen></iframe>
    </div>

    {
     display &&  items && 
        items.map((data,index)=><><div >
          <VideoCard key={index} imgurl={data.thumbnails[0].url} title={data.title} id={data.id} handleClick={(e)=>handleClick(e)}/>
          
          </div></>) 
          
    }
    </div>
    //
    
    
//     <div className='home-container'>
// <div className="d-flex justify-content-evenly">
// <VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/xCO_Bo-2sWI?si=-jITA0n7rqTHh09_"/>
// <VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/_ucD8sc30xY?si=nL7eyMN6w1OjKYLF"/>
// <VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/8rIviI0ZKNA?si=R66G6lar6zRXrVWA"/>

//     </div>
//     <div className="d-flex justify-content-evenly">
// <VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/SvcCriKKBaA?si=On3-PeElNv65drxQ"/>
// <VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/uA3gatbn4dI?si=twEMTp3_xxRBq5p9"/>
// <VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku"/>

//     </div>
//     <div className="d-flex justify-content-evenly">
// <VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/sGskENRWXTU?si=mja6plRjGvdBgGHa"/>
// <VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku"/>
// <VideoCard image="https://thumbs.dreamstime.com/b/global-trade-word-cloud-concept-grey-background-90690637.jpg" title="youtube" description="bkjhikhgku" url="https://youtu.be/lOSPQVZLixY?si=cE4ng7hSbiMJ-RTr"/>

//     </div>
//     </div>
    // AIzaSyDPQQ1eS7mVo3Jsb9HlEMtmuFj5wihgdEA
    //  https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2C%20contentDetails&channelId=UCfYHvYyFICHwHVO9lHwmiig&key=AIzaSyAuC5AyTs4nbWPhAJDuStvDSSA8MuJIEmA
    //  https://www.googleapis.com/youtube/v3/search?key=AIzaSyDPQQ1eS7mVo3Jsb9HlEMtmuFj5wihgdEA&channelid=UCfYHvYyFICHwHVO9lHwmiig&snippet,id&order=date&maxResults=50&pageToken=CDIQAA
  )


}

export default Saving
