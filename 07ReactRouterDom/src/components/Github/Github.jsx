import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    console.log(data)
    
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Account: {data.name}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/satyajit741055')
    return response.json()
}