import { useEffect, useState } from 'react'
import '../styles/About.css'

const About = () => {
    interface Post {
        id: number;
        title: string;
        body: string;
    }

    const [posts, setPosts] = useState<Post[]>([])

useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
}, [])


  return (
    <div>
      <h2>About</h2>
      <div className="grid-container">
        {posts.map(post => (
              <div key={post.id} className="grid-item">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
              </div>
        ))}
      </div>
    </div>
  )
}

export default About