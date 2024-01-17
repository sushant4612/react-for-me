import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sushant4612')
    //     .then( (res) => res.json())
    //     .then( (data) => {
    //         setData(data);
    //     })
    // },[])

  return (
    <>
        <h1 className=' text-gray-700 text-center font-bold p-7 '>Github followers: {data.followers}</h1>
        <img src={data.avatar_url} alt="" />
    </>
  )
}


export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sushant4612');
    return response.json();
} 

