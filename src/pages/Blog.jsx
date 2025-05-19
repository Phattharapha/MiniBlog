import { Link } from 'react-router-dom'

const posts = [
  { id: 1, title: "Learn React Router" },
  { id: 2, title: "Nested Routes are Cool" },
  { id: 3, title: "Dynamic URLs in React" },
]

function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog
