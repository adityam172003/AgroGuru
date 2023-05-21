import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Features.css'

const Features = ({title, body}) => {
    // const navigate = useNavigate();

    return (
    <div >
       <div className='features_news_card'>
            <div className='card-title'>
                <h3>{title}</h3>
            </div>
            <div className='card-body'>
                {body}
            </div>
       </div>
       
    </div>
  )
}

export default Features