import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Features from './Features';
import { MainContext } from '../context/agroguru_context';
import Spinner from './Spinner';


const News = () => {
    const { spin,setSpin } = useContext(MainContext);
    
    // var axios = require("axios").default;
    var options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {q: 'Agriculture', lang: 'en', sort_by: 'relevancy', page: '1', page_size:'10'},
    headers: {
        'x-api-key': '5fxFWVrmWLGDgYZZcnZ_kwVrW8EA72sdITt6xZo6F5E'
    }
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            setData(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }, [])
    
    const [data, setData] = useState({})
    // const url = `https://api.newscatcherapi.com/v2/search`
  
    return (
    <div className='news'>
        {/* {data ? (
            data.articles.map((ob) => {
                return(
                    <Features title={ob.title} body={ob.summary} key={ob.title}/>
                )
            })
            ):<h1>News</h1>
        } */}
        
    </div>
  )
}

export default News