import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams();
  return (
    <div className='text-center bg-blue-300'>User: {userid}</div>
  )
}

export default User