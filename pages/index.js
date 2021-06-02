import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <h1>Welcome to Mastering Next.js</h1>
    </React.Fragment>
  )
}
