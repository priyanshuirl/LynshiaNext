import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/Layout.module.css"
import { useEffect, useState } from "react"
import Link from "next/link";
import LoaderAnim from "./loaderanim";

function Layout({ children }) {
    const [loading, setLoading] = useState(true);
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
        }, 3000);
    }, []);
    setTimeout(() => {
        setLoading(false)
    }, 1500);
    return (
        <div>
            {loading && <LoaderAnim />}
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