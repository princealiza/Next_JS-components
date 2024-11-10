import React from 'react'
import Link from "next/link"

const page = () => {
  return (
    <div>
        <h1>About</h1>
      
        <p>This is about page of the website</p>
        <br/>
        <Link href="/header">Go to Header page</Link>
        <br/>
        <Link href="/">Go to Homepage</Link>
    </div>
  )
}

export default page