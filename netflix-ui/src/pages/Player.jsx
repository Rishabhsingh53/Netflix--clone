import React from 'react'
import {BsArrowLeft} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import video from "../assets/video.mp4"
import "./Player.css"
export default function Player() {
  const navigate = useNavigate()
  return (
    <div className='player--container'>
      <div className="player">
        <div className="player--back">
          <BsArrowLeft onClick={()=>{navigate(-1)}}/>
        </div>
        <video className='player--video' src={video} muted autoPlay loop controls /> 
      </div>
    </div>
  )
}
