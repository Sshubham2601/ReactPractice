// import React, { useId } from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userId}=useParams()
  return (
    <div>
      <h1 className='bg-gray-600 text-black  text-3xl  p-4 '>Users:{userId}</h1>
    </div>
  )
}

export default User
