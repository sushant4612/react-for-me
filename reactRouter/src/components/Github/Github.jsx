import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
  return (
    <div>Github : {data.followers}</div>
  )
}

export default Github

export const githubData = async () => {
    const res = await fetch('https://api.github.com/users/sushant4612');
    return res.json();
}