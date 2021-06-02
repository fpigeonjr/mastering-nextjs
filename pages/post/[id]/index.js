import { useRouter } from 'next/router'
import Header from '../../../components/header'
import React from 'react'

const Post = ({ title, body }) => (
  <React.Fragment>
    <Header />
    <h1>{title}</h1>
    <p>{body}</p>
  </React.Fragment>
)

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  )
  const post = (await res).json()

  return post
}

export default Post
