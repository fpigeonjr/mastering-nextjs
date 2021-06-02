import { useRouter } from 'next/router'
import Header from '../../../components/header'
import React from 'react'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <React.Fragment>
      <Header />
      <h1>Post: {id}</h1>
    </React.Fragment>
  )
}

export default Post
