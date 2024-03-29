import React, { useEffect, useState } from 'react'
import "./Netflix.css"
import NavBar from '../components/NavBar'
import backgroundImage from "../assets/home.jpg"
import MovieLogo from "../assets/homeTitle.webp"
import {FaPlay} from "react-icons/fa"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../store'

function Netflix() {
  const [isScrolled , setIsScrolled] =  useState(false)
  const navigate = useNavigate()
  const generesLoaded = useSelector( ( state) => state.netflix.generesLoaded)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(getGenres())
  })
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true  )
    return () => {
      window.onscroll = null;
    }
  }

  return (
    <div className='netflix--parent'>
      <NavBar isScrolled = {isScrolled} />
      <div className="netflix--hero">
        <img src={backgroundImage} alt="background" className='netflix--background-img' />
        <div className="netflix--container">
          <div className="netflix--logo">
            <img src={MovieLogo} alt="movielogo" />
          </div>
          <div className="netflix--buttons">
            <button className='play' onClick={()=>navigate("/player")}><FaPlay /> Play </button>
            <button className='more-info '><AiOutlineInfoCircle /> More Info </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Netflix