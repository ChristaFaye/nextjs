import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import icon from '../img/logo.png'
import styles from '../../styles/Home.module.css'
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

      <main className={styles.main}>
       
        <div className={styles.aboutMe}>
          <h1>Hey, there!</h1>
          <div >
            <p>Hi! I'm Christa Faye Reyes. I am borne Filipino, based in Manitoba, Canada.</p>
            <p>I have an almost 7 years of experience on back-end development and support. I worked as an Application Support, exposed to different programming languages such as: SQL, PowerShell, Bash, C#, ASP.Net, HTML, CSS, JavaScript, Ansible.. etc.
            </p>
            <p>Aside from my technical background, I had a volunteer experience since 2013 to 2018 which stirred my passion for design. I volunteer in creating publication materials, audio-visual presentations, editing podcasts and coordinating events
            </p>
          </div>

          <div className={styles.sites}>
            <h4>Know More About Me:</h4>
            <a href="https://www.linkedin.com/in/christafayereyes/"><FiLinkedin size={35} /></a>
            <a href="https://github.com/ChristaFaye"><FiGithub size={35} /></a>
          </div>
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