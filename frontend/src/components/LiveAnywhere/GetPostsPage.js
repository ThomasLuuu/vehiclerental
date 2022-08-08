import React from 'react'
import { useState, useEffect } from 'react';
import DummyData from './dummydata.json'
import { Post } from './Post.js'
import FadeLoader from "react-spinners/FadeLoader";

const GetPostsPage = () => {

    // Config initial state for arrlist
    const initialState = [
        <Post loc={require('../../img/Img1.jpg')} name="Mazda" rating="2.2" type="Car" color="Grey" price="10.59"/>,
        <Post loc={require('../../img/Img2.jpg')} name="Mazda" rating="2.8" type="Car" color="Midnight Blue" price="13.63"/>,
        <Post loc={require('../../img/Img3.jpg')} name="Mazda" rating="3.65" type="Car" color="Red Velvet" price="20.78"/>,
        <Post loc={require('../../img/Img4.jpg')} name="Yamaha" rating="1.79" type="Motorbike" color="Silver" price="11.6"/>,
        <Post loc={require('../../img/Img1.jpg')} name="Yamaha" rating="1.95" type="Motorbike" color="Gold" price="11.68"/>
    ];
    let pageNum = 1;
    const [arr, setArr] = useState(initialState);
    // const [loading, setLoading] = useState(false);
    // function ToggleSpinner(){
    //     useEffect(() => {
    //         setLoading(true)
    //     }, [])
    // }
    let pre = window.scrollY;

    window.addEventListener("scroll", () => {
        if (pageNum < 4)
        if (pageNum <= 3)        
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 1) 
        {
            console.log('Page1: ' + pageNum);
            pageNum++;
            console.log('Page2: ' + pageNum);
            pre = window.scrollY;
            DummyData.map((data)=>{
                if (data.index <= pageNum*5 && data.index > (pageNum-1)*5){
                    console.log('Page4: ' + pageNum);
                    let remainder = data.index % 4;
                    if (remainder === 0) remainder = 4;
                    let price_value = "$"+data.price;
                    setArr(current => [...current, <Post loc={require('../../img/Img' + remainder.toString() + '.jpg')} name={data.name} rating={data.rating} type={data.type} color={data.color} price={price_value}/>]);
                }
            })
        }
    })
    if (pageNum==1){
        return (
            arr.map((data)=>{
                return data;
            })
        )
    }
}

export default GetPostsPage