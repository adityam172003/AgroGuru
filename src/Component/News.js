import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Features from './Features';
import '../Styles/Features.css';


const News = () => {
    const [data, setData] = useState({articles : [{
        title : 'News Title',
        description : 'News Description'
    }]})
    
    const url = `https://newsapi.org/v2/everything?q=agriculture&language=en&pageSize=12&apiKey=15cd77928d8440b988888b289a0c2cf4`;

    const getNews = async() => {
        const res = await axios.get(url);
        setData(res.data);
        console.log(res.data);
    }

    useEffect(() => {
        getNews();
    }, [])
    
  
    return (
    <div id="news_feature">
        <h2>AgriNews Digest</h2>
        <section id="info_pg_gallery">
            {
                data.articles.map((ob) => {
                    return(
            
                            <Features title={ob.title} body={ob.description} key={ob.title}/>
            
                    )
                })
            }
        </section>
        
    </div>
  )
}

export default News