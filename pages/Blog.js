import Head from 'next/head'
import React from 'react'
import user from "../components/user.jpg"
import Image from 'next/image'
import Link from 'next/link'

function Blog({title,content,imgurl}) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>

      <div className="container">
        <div className="card">
          <img src={imgurl} />
          <div className="card-body mrcol">
            <h5 className="card-title">{title.slice(0,20)}...</h5>
            <p className="card-text">{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog