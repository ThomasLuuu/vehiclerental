import React from 'react'
import { useState, useEffect } from 'react';
import { Post } from './Post.js'

const GetPostsPage = () => {
    const [vehicles, setVehicles] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() =>{
        fetch(`http://localhost:5000/api/vehicle?page=${page}&size=5`)
          .then(res => res.json())
          .then(json => {
            console.log(json.vehicles)
            json.vehicles.map((v) => {
                console.table(v)
            })
            setVehicles(json.vehicles)
          })
    }, [page]);

    const loadData = () => {
        setPage(page + 1);
    }

    window.onscroll = function(){
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
            loadData();
        }
    }
    
    return (
        vehicles.length > 0 && vehicles.map((data, i) => {
            const price_value = "$" + data.price;
            return <Post key={data._id} loc={data.url} name={data.name} rating={data.rating} type={data.version} color={data.color} price={price_value}/>
        })
        
    )
}

export default GetPostsPage