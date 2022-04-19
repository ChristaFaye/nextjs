import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import icon from '../img/logo.png'
import banner from '../img/banner.png'
import elite from '../img/elite.png'
import coding from '../img/coding-challenge.jpg'
import ui from '../img/ui-kit.png'
import compeer from '../img/compeer.png'
import styles from '../../styles/Home.module.css'
import pstyles from '../../styles/Portfolio.module.css'
import { BiHomeSmile, BiWinkSmile, BiFolderOpen, BiMailSend } from 'react-icons/bi';
import { FiLinkedin, FiGithub } from 'react-icons/fi'

export default function About() {
  return (
    <>
     <div className={styles.container}>
      <Head>
        <title>Next JS App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>
      <header>
        <nav className={styles.navigation}>
        
          <div className={styles.navLink}>
            <Link href="/">
              <a alt="Home"><BiHomeSmile size={30} /></a>
            </Link>
            <Link href="/posts/about">
              <a alt="About"><BiWinkSmile size={30}/></a>
            </Link>
            <Link href="/">
              <a alt="Logo"> 
                <Image src={icon} 
                  alt="banner"
                  width={40}
                  height={40}/>
              </a>
            </Link>
            <Link href="/posts/portfolio">
              <a alt="Projects"><BiFolderOpen size={30}/></a>
            </Link>
            <Link href="/posts/contact">
              <a alt="Contact"><BiMailSend size={30}/></a>
            </Link>
          </div>
        </nav>
      </header>

      <main className={pstyles.portfolio}>
        <div className={pstyles.slider}>
        


            <div className={pstyles.slides}>
                <div id="slide-1">
                    <Image src={banner} 
                        alt="banner"
                        width={900}
                        height={500}/>
                </div>
                <div id="slide-2">
                    <Image src={elite} 
                        alt="banner"
                        width={900}
                        height={500}/>
                </div>
                <div id="slide-3">
                    <Image src={coding} 
                            alt="banner"
                            width={900}
                            height={500}/>
                </div>
                <div id="slide-4">
                    <Image src={ui} 
                            alt="banner"
                            width={900}
                            height={500}/>
                </div>
                <div id="slide-5">
                    <Image src={compeer} 
                            alt="banner"
                            width={900}
                            height={500}/>
                </div>
            </div>

            <a href="#slide-1">1</a>
            <a href="#slide-2">2</a>
            <a href="#slide-3">3</a>
            <a href="#slide-4">4</a>
            <a href="#slide-5">5</a>
        </div>
      </main>
      

      <footer className={styles.footer}>
          Copyright | {' '} Christa Faye Reyes © 2022  {' '} 
          <span className={styles.logo}>
            <Image src={icon} alt="Logo" width={15} height={15}/>
          </span>
      </footer>

    </div>
    </>
  )
}