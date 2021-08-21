import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/Layout.module.css"
import { useEffect } from "react"
import Link from "next/link";

function Layout({ children }) {
    useEffect(() => {
        setTimeout(() => {
            document.getElementById("cookienotice").classList.add(styles.cookieactive);
            if (localStorage.getItem("isCookieDismissed")) {
                document.getElementById("cookienotice").classList.remove(styles.cookieactive);
            }
            else {
                document.getElementById("cookiebtn").addEventListener("click", () => {
                    localStorage.setItem("isCookieDismissed", true)
                    document.getElementById("cookienotice").classList.remove(styles.cookieactive);
                })
            }
        }, 2000);
    }, []);
    return (
        <div>
            <Navbar />
            <div id="cookiewrap" className={`${styles.cookiewrap} vflex`}>
                <div id="cookienotice" className={styles.cookienotice}>
                    <p>By continuing to browse the site you agree to our use of cookies. To learn more visit our <Link href="/privacypolicy">Privacy Policy</Link> and <Link href="/termsofuse">Terms Of Use</Link>.</p>
                    <button id="cookiebtn">Got it!</button>
                </div>
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default Layout;