import React from 'react'
import Link from "next/link"
import next from 'next'
const page = () => {
  return (
    <div>
        <h1>Header</h1>
        
      <p>This is a header page of website</p>
      <br/> 
      <Link href="/about">Go to About page</Link>
      <br/>
      <Link href="/">Go to Homepage</Link>

    </div>
  )
}

export default page