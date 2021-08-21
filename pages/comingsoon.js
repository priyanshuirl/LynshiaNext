import styles from "../styles/ComingSoon.module.css"
import Head from "next/head"

export default function ComingSoon() {
    return (
        <div className={`${styles.comingbanner} vflex`}>
            <Head>
                <title>Lynshia | Coming Soon</title>
                <meta name="description"
                    content="Lynshia helps you to manage your periods and reduce pain. It tracks and predicts your cycles while providing expert support during your menstruation." />
                <meta name="keywords"
                    content="periods, menstruation, period cramps, women's health, women empowerment, women, menstrual cycle, period pain, yoga, manage periods, reduce pain, track, predict, pads, tampons, menstrual cups, pms, personal, menstrual, assistant" />
            </Head>
            <h1>Coming Soon!</h1>
            <p>Thank You for showing Your interest in Lynshia, we are yet to announce our Official Launch date, so till then, Stay Tuned! </p>
        </div>
    )
}