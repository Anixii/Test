import React, { useEffect, useState } from 'react'
import { Link,useLocation } from 'react-router-dom'

const Posts = () => { 
  const [post, setPost] = useState([])
  console.log(post);
  useEffect(() =>{ 
    const getData = async() =>{ 
      const data = await fetch('https://jsonplaceholder.typicode.com/posts') 
      const dataJson = await data.json() 
      setPost(dataJson)
    } 
    getData()
  },[])
  return (
    <ul> 
      {post.map((item,index) =><Link key={index} to={`/post/${item.id}`}><li >{item.title}</li></Link>)}
    </ul>
  )
}

export default Posts