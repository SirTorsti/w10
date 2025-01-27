import { useEffect, useState } from 'react'


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
      {posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
      ))}
    </div>
  )
}

export default About