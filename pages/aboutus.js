import styles from "../styles/AboutUs.module.css"
import Head from "next/head"

export default function AboutUs() {
    return (
        <div>
            <Head>
                <title>Lynshia | About Us </title>
                <meta name="description"
                    content="We here at Lynshia break the stereotypes and Provide crucial assistance and support to women across the Globe during their Menstruation and Beyond through our virtual assistant, Lynshia." />
                <meta name="keywords"
                    content="periods, menstruation, period cramps, women's health, women empowerment, women, menstrual cycle, period pain, yoga, manage periods, reduce pain, track, predict, pads, tampons, menstrual cups, pms, personal, menstrual, assistant" />
            </Head>
            <div className={`${styles.aboutbanner} vflex`}>
                <h1>About Us</h1>
            </div>
            <div className={`${styles.abtwrap} vflex`}>
                <div className={`${styles.alogo} vflex`}>
                    <h3>Lynshia</h3>
                    <p>Menstrual Assistant</p>
                </div>
                <p className={styles.head}>Lynshia is one of the World's Most Innovative and Fastest Growing women's health platforms.</p>
            </div>
            <div className={`${styles.contentbanner} vflex`}>
                <h5>What does Lynshia do?</h5>
                <p className={styles.content}>
                    We here at Lynshia break the stereotypes and Provide crucial assistance and support to women across the Globe during their Menstruation and Beyond through our virtual assistant, Lynshia.</p>
                <h5>What inspires Lynshia?</h5>
                <p className={styles.content}> Menstruation has always been considered a taboo in the mainstream society and often times we find women struggling with this even in the 21st Century, many a times even risking their health due to lack of awareness and misinformation.<br /><br /> This had to change, and ever since it's inception Team Lynshia is fueled by the mission to bring about a positive change.
                </p>
                <h5>What is Our Goal?</h5>
                <p className={`${styles.tagbanner} ${styles.tgban}`}> Our Goal is to empower every single woman during her menstruation and Beyond.</p>
                <h5>How does Lynshia work?</h5>
                <p className={styles.content}> We built a Smart Personal Assistant that provides a plethora of features and crucial assistance to women during their Menstruation, from Tracking and predicting their cycles to helping manage and reduce their cramps while providing help and support through our Dedicated FAQ's, tips, tricks section, and Reminders.</p>
            </div>
        </div>
    )
}