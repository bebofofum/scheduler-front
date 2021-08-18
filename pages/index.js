import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({ streamData }) {


  return (
    <div>
      {/* perform a function to iterate through streams and show details */}
      {streamData && streamData.map(({ id, Name, Description }) => (
         <div className=" " key={id}>
            <h1>{Name}</h1>
            <div className="">{Description}</div>
         </div>
      ))}
      {/* Testing How Next does page Links */}
      <h2>See <Link href="/streams/first-stream"><a>First Stream</a></Link></h2>
     
    </div>
  )
}

export async function getStaticProps() {

  //get content from strapi

  const getStreamsRes = await fetch("http://localhost:1337/streams");

  const streamData = await getStreamsRes.json();

  console.log(streamData)


  return {
    props: { streamData },
  }
}


