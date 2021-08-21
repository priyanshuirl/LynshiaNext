import $ from 'jquery';
import styles from '../styles/Navbar.module.css'
import Head from "next/head"
import { useState } from "react"
import ActiveLink from './activeLinks'

export default function Navbar() {
    const [arrow, setArrow] = useState("fas fa-angle-double-down")
    const [count, setCount] = useState(0)
    return (
        <div className={`${styles.fixnav} vflex`}>
            <Head>
                <script src="https://kit.fontawesome.com/2ac5c57d76.js"></script>
            </Head>
            <nav className="hflex">
                <ActiveLink href="/"><a><div className={`${styles.logo} vflex`}>
                    <h3>Lynshia</h3>
                    <p>Menstrual Assistant</p>
                </div></a>
                </ActiveLink>
                <div className={`${styles.menuwrapper} hflex`}>
                    <div className={styles.dmenu}>
                        <ul className={`${styles.dlist} hflex`}>
                            <li className={styles.done}><ActiveLink activeClassName="active" href="/" ><a>Home</a></ActiveLink></li>
                            <li className={styles.dtwo}><ActiveLink activeClassName="active" href="/aboutus" ><a>About&nbsp;Us</a></ActiveLink></li>
                            <li className={styles.dfour}><ActiveLink activeClassName="active" href="/careers" ><a>Careers</a></ActiveLink></li>
                            <li className={styles.done}><ActiveLink activeClassName="active" href="/peoplebehindlynshia"><a>People&nbsp;Behind&nbsp;Lynshia</a></ActiveLink></li>
                        </ul>
                    </div>
                    <div className={`${styles.navbutton} hflex`}>
                        <ul className={`${styles.lol} hflex`}>
                            <ActiveLink activeClassName="active" href="/comingsoon">
                                <a><li className={styles.login}>Login</li></a>
                            </ActiveLink>
                            <ActiveLink activeClassName="active" href="/comingsoon">
                                <a><li className={styles.signup}>Sign&nbsp;Up</li></a>
                            </ActiveLink>
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
                    <li id="one" className={styles.one}><ActiveLink activeClassName="active" href="/"><a>Home</a></ActiveLink></li>
                    <li id="two" className={styles.two}><ActiveLink activeClassName="active" href="/aboutus"><a>About&nbsp;Us</a></ActiveLink></li>
                    <li id="four" className={styles.four}><ActiveLink activeClassName="active" href="/careers"><a>Careers</a></ActiveLink></li>
                    <li id="three" className={styles.three}><ActiveLink activeClassName="active" href="/peoplebehindlynshia"><a>People&nbsp;Behind&nbsp;Lynshia</a></ActiveLink></li>
                </ul>
            </div>
        </div>
    )
}