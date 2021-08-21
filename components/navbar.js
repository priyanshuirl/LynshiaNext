import $ from 'jquery';
import styles from '../styles/Navbar.module.css'
import Link from "next/link"
import Head from "next/head"
import { useState } from "react"
import Script from 'next/script'

export default function Navbar() {
    const [arrow, setArrow] = useState("fas fa-angle-double-down")
    const [count, setCount] = useState(0)
    return (
        <div className={`${styles.fixnav} vflex`}>
            <Head>
                <Script src="https://kit.fontawesome.com/2ac5c57d76.js"></Script>
            </Head>
            <nav className="hflex">
                <Link href="/"><a><div className={`${styles.logo} vflex`}>
                    <h3>Lynshia</h3>
                    <p>Menstrual Assistant</p>
                </div></a>
                </Link>
                <div className={`${styles.menuwrapper} hflex`}>
                    <div className={styles.dmenu}>
                        <ul className={`${styles.dlist} hflex`}>
                            <li className={styles.done}><Link href="/" ><a>Home</a></Link></li>
                            <li className={styles.dtwo}><Link href="/aboutus" ><a>About&nbsp;Us</a></Link></li>
                            <li className={styles.dfour}><Link href="/careers" ><a>Careers</a></Link></li>
                            <li className={styles.done}><Link href="/peoplebehindlynshia"><a>People&nbsp;Behind&nbsp;Lynshia</a></Link></li>
                        </ul>
                    </div>
                    <div className={`${styles.navbutton} hflex`}>
                        <ul className={`${styles.lol} hflex`}>
                            <Link href="/comingsoon">
                                <a><li className={styles.login}>Login</li></a>
                            </Link>
                            <Link href="/comingsoon">
                                <a><li className={styles.signup}>Sign&nbsp;Up</li></a>
                            </Link>
                            <span className={styles.toggle} onClick={() => {
                                $("#one").slideToggle(100);
                                $("#two").slideToggle(200);
                                $("#three").slideToggle(300);
                                $("#four").slideToggle(400);
                                if (count === 0) {
                                    setArrow("fa fa-angle-double-up")
                                    setCount(1)
                                }
                                else if (count === 1) {
                                    setArrow("fa fa-angle-double-down")
                                    setCount(0)
                                }
                            }}><i id="marrja" className={arrow}></i></span>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className={`${styles.menu} vflex`}>
                <ul className={styles.ulhvr} onClick={() => {
                    $("#one").slideUp(100);
                    $("#two").slideUp(200);
                    $("#three").slideUp(300);
                    $("#four").slideUp(400);
                    if (count === 0) {
                        setArrow("fa fa-angle-double-up")
                        setCount(1)
                    }
                    else if (count === 1) {
                        setArrow("fa fa-angle-double-down")
                        setCount(0)
                    }
                }}>
                    <li id="one" className={styles.one}><Link href="/"><a>Home</a></Link></li>
                    <li id="two" className={styles.two}><Link href="/aboutus"><a>About&nbsp;Us</a></Link></li>
                    <li id="four" className={styles.four}><Link href="/careers"><a>Careers</a></Link></li>
                    <li id="three" className={styles.three}><Link href="/peoplebehindlynshia"><a>People&nbsp;Behind&nbsp;Lynshia</a></Link></li>
                </ul>
            </div>
        </div>
    )
}