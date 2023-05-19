import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Features from './Features';
import '../Styles/Features.css';
import { MainContext } from '../context/agroguru_context';
import Spinner from './Spinner';


const News = () => {
    // const { spin,setSpin } = useContext(MainContext);
    var flag = true;
    const [data, setData] = useState({})
    const [url, setUrl] = useState(`https://newsapi.org/v2/everything?q=agriculture&language=en&pageSize=9&apiKey=15cd77928d8440b988888b289a0c2cf4`);

    const getNews = async() => {
        const res = await axios.get(url);
        flag = false;
        setData(res.data);
        console.log(res.data);
        flag = false;
    }

    useEffect(() => {
        // axios.get(url).then((response) => {
        //   setData(response.data)
        // console.log(response.data)
        // setSpin(false);
        getNews();
        flag = false;
    }, [])
    
  
    return (
    <div className='news'>
        {/* { 
            data.articles.map((ob) => {
                return(
                    <Features title={ob.title} body={ob.description} key={ob.title}/>
                )
            })
        
        } */}
        
    </div>
  )
}

export default News