'use client'

import React, { useEffect, useState } from 'react'
import { Post } from '@/app/types'

const FetchDataClient = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPosts(data)
    }

    fetchData()
  }, [])

  return (
    <div className='p-4'>
      {posts.map((post) => (
        <div className='m-2 border border-gray-300 p-4' key={post.id}>
          <h2 className='text-lg font-bold'>{post.title}</h2>
          <p className='text-gray-600'>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default FetchDataClient
