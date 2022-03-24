import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Cover from '../images/cover.jpeg'

export default function Home() {
  return (
    <div className={styles.container}>
    <>
      <div className='image-container'>
      <Image src={Cover} />
      </div>
    </>

    </div>
  )
}
