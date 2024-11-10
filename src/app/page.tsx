import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1> 
      <br></br>
    
      
      <Link href="/header">Go to Header page</Link>
      <br/>
      <Link href="/about">Go to About page</Link>
      
    </div>
  );
}
