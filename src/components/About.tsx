import { useEffect, useState } from 'react'
import '../styles/About.css'

const About = () => {
    interface Post {
        id: number;
        title: string;
        body: string;
    }

    const [posts, setPosts] = useState<Post[]>([])
    const [visibleItems, setVisibleItems] = useState<number>(12)

useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
}, [])

const showMoreItems = () => {
  setVisibleItems(prevVisibleItems => prevVisibleItems + 12)
}


  return (
    <div>
      <h2>About</h2>
      <div className="grid-container">
        {posts.slice(0, visibleItems).map(post => (
              <div key={post.id} className="grid-item">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
              </div>
        ))}
      </div>
      {visibleItems < posts.length && (
        <button onClick={showMoreItems}>Show more</button>
      )}
    </div>
  )
}

export default About