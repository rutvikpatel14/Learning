import React, { useEffect, useState } from 'react'

function GetApi() {

    const [myData, setData] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(response =>{
            console.log(response)
            setData(response);
        })
        
    })
  return (
    <>
        {myData.map((value,index)=>{
            return<div key={index}>
                <ul>
                    <li>{value.title}</li>
                    <li>{value.price}</li>
                    <li>{value.description}</li>
                    <li><img src={value.image} style={{height:'100px'}}/></li>
                </ul>
            </div>
        })}
    </>
  )
}

export default GetApi