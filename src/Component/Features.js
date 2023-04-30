import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Features.css'

const Features = ({title, url, body, nav}) => {
    const navigate = useNavigate();

    return (
    <div className='feature-container'>
       <div className='image-container'> 
            <img src={url} alt={title}/>
       </div>
       <div className='card-content'>
            <div className='card-title'>
                <h3>{title}</h3>
            </div>
            <div className='card-body'>
                {body}
            </div>
            <div className='card-btn'>
                <button 
                    onClick={() => {
                        navigate(`${nav}`)
                    }}
                >
                    View More
                </button>
            </div>
       </div>
       
    </div>
  )
}

export default Features