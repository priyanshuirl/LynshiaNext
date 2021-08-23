import styles from "../styles/FourOFour.module.css"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function FourOFour() {
    const [timer, setTimer] = useState(10);
    var i = 10;
    const router = useRouter()
    useEffect(() => {
        setInterval(() => {
            setTimer(i);
            i--
        }, 1000)
        setTimeout(() => {
            router.push("/")
        }, 13500)
    }, [])
    if (timer > 0) {
        return (
            <div className={styles.errorwrapper}>
                <Head>
                    <title>Page Not Found | 404 Error</title>
                </Head>
                <h1>404 error</h1>
                <h2>The page you're looking for does not seem to exist.<br />
                    Please check if you clicked or entered a valid URL.</h2>
                <h3><br />But now that you're here,<br />
                    We want you to smile&nbsp;<i class="far fa-laugh"></i></h3>
                <h4>in . . . {timer}</h4>
            </div>
        )
    } else {
        return (
            <div className={styles.errorwrapper}>
                <h1>404 error</h1>
                <h2>The page you're looking for does not seem to exist.<br />
                    Please check if you clicked or entered a valid URL.</h2>
                <h3><br />Redirecting To Homepage</h3>
            </div>
        )
    }
}