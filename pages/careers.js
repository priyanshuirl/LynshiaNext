import styles from "../styles/Careers.module.css"
import Head from "next/head"

export default function Careers() {
    return (
        <div>
            <Head>
                <title>Lynshia | Careers</title>
                <meta name="description"
                    content="At Lynshia, We wish to build a Team of Individuals who want to bring about change in this world." />
                <meta name="keywords"
                    content="periods, menstruation, period cramps, women's health, women empowerment, women, menstrual cycle, period pain, yoga, manage periods, reduce pain, track, predict, pads, tampons, menstrual cups, pms, personal, menstrual, assistant" />
            </Head>
            <div className={styles.careerbanner}>
                <div className={`${styles.clogo} vflex`}>
                    <h3>Lynshia</h3>
                    <p>Menstrual Assistant</p>
                </div>
                <h1>Build Your Career With Lynshia!</h1>
            </div>
            <div className={`${styles.careercont} vflex`}>
                <h3>A Great Career Starts with a Great Job Application!</h3>
                <a href={"https://docs.google.com/forms/d/e/1FAIpQLSf3ptA0N5JbIGMK-ypoUe3diGYf3wI6JiH4QGaAqHPTOj9zUQ/viewform"}>
                    <h4>Apply Now</h4></a>
                <div className={`${styles.careerdesc} vflex`}>
                    <p>At Lynshia, We wish to build a Team of Individuals who want to bring about change in this world.<br /><br /> Menstruation has always been considered a taboo in mainstream society.<br /> We often find women struggling with this even in the 21st Century, many times even risking their health due to lack of awareness and misinformation.<br /><br /> We here at Lynshia break the stereotypes and Provide crucial assistance and support to women across the Globe during those times through our virtual assistant. <br /><br />To make this vision a Reality, We are constantly on the Lookout for Individuals who have the skill, as well as the mindset required to change the world.</p>
                    <p className={`${styles.careerban} ${styles.tagbanner}`}>You have the Potential to Change the World.</p>
                </div>
                <h3>Come Join Us in Our Mission. Be a Part of Team Lynshia.</h3>
                <a href={"https://docs.google.com/forms/d/e/1FAIpQLSf3ptA0N5JbIGMK-ypoUe3diGYf3wI6JiH4QGaAqHPTOj9zUQ/viewform"}>
                    <h4>Apply Now</h4></a>
            </div>
        </div>
    )
}