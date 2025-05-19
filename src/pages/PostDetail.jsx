import { useParams } from 'react-router-dom'

const postData = {
  1: "React Router is a powerful routing library for React.",
  2: "You can nest routes to make clean layouts.",
  3: "Dynamic routing lets you create flexible URLs.",
}

function PostDetail() {
  const { id } = useParams()
  const content = postData[id]

  return (
    <div>
      <h2>Post #{id}</h2>
      <p>{content || "Post not found."}</p>
    </div>
  )
}

export default PostDetail
