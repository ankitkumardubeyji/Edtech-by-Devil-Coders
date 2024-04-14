import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/js/bootstrap";
import { useNavigate } from 'react-router-dom';


const CourseHero = (props) => {
  const navigate=useNavigate();
  function handleClick(){
    if(props.channelid==="UCnMn36GT_H0X-w5_ckLtlgQ"){
      navigate("/courses/saving")
    }
    if(props.channelid==="UCuIUGmbCDklkDCDm-cQqv2g"){
      navigate("/courses/budget")
    }
    if(props.channelid==="UCGL9ubdGcvZh_dvSV2z1hoQ"){
      navigate("/courses/trade")
    }
   }
  // const [name,setName] = useState("");
  
  // useEffect(()=>{
  //   const url = `https://youtube-media-downloader.p.rapidapi.com/v2/channel/details?channelId=${props.channelid}`;
  
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '6c18be0265msha8ecbb2a5b3f3cdp15be0cjsn838e21f2d7b9',
  //       'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
  //     }
  //   };
    
  //   try {
  //     const response =  fetch(url, options).then((res)=>res.json()).then((res)=>setName(res));
  //      console.log(name)
      
      
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },[])
  //const desc=name.description.slice(0,200);
  // const {description} = name.description;
  // console.log(description)
  // console.log(description.slice(0,50));
  return (
    <div className='shadow-lg p-3 mb-5  mx-5 mt-3 border-5 border-black'>
      <div className="container col-xxl-4 px-4 py-5   " onClick={handleClick}>
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5   ">
      <div className="col-10 col-sm-4 col-lg-6   ">
        <img src={props.imgurl} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6   ">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3   ">{props.name}</h1>
        <p className="lead">{props.description}</p>
        
      </div>
    </div>
  </div>
    </div>
  )
}

export default CourseHero
