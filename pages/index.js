import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  console.log("i am on the client")


  return (
    <div className=" ">Welcome screen</div>
  )
}

export async function getStaticProps() {

  console.log("i am on the server");

  return {
    props: {},
  }
}


