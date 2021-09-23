import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import FeatureProto from '../components/featureproto'
import FeatureProtoFlip from '../components/featureprotoflip'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lynshia | Manage Periods, Reduce Pain, Track & Predict Your Cycles.</title>
        <meta name="description"
          content="Lynshia helps you to manage your periods and reduce pain. It tracks and predicts your cycles while providing expert support during your menstruation." />
        <meta name="keywords"
          content="periods, menstruation, period cramps, women's health, women empowerment, women, menstrual cycle, period pain, yoga, manage periods, reduce pain, track, predict, pads, tampons, menstrual cups, pms, personal, menstrual, assistant" />
      </Head>
      <div className={`${styles.banner} vflex`}>
        <h3>Meet <span className={styles.lynshia}>Lynshia</span></h3>
        <h4>Your Personal Menstrual Assistant</h4>
      </div>
      <div className={`${styles.bannerbtns} vflex`}>
        <Link href="/comingsoon" ><a className={styles.signbanner}>Sign Up</a></Link>
        <Link href="/comingsoon" ><a className={styles.loginbanner}>Login</a></Link>
        <h2 className={styles.tour}>Scroll Down to Take a Tour <i className="fas fa-arrow-circle-down"></i></h2>
      </div>
      <div className={`${styles.tagwrapper} vflex`}>
        <div className={styles.tagbannerlol}>
          <h1>Dealing with Periods can be Tough.</h1>
        </div>
        <div className={styles.tagbanner}>
          <h1>But with Lynshia by your side it&apos;s never been easier!</h1>
        </div>
      </div>
      <div className={styles.introban}>
        <h1>Lynshia is a Women's Health Platform that helps women Manage their Periods, Reduce Cramp Pain, Track their Cycles, and Relieve PMS related problems.</h1>
      </div>
      <div className={styles.iframecontainer}>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_LI3syHaByM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <div className={styles.tile}>
        <h5>What Can Lynshia Do For You?</h5>
      </div>
      <div className={styles.topwrapper}>
        <div className={styles.wrapper}>
          <div className={styles.statictxt}>Lynshia Helps You</div>
          <ul className={styles.dynamictxts}>
            <li><span>Manage Periods.</span></li>
            <li><span>Reduce Pain.</span></li>
            <li><span>Track Your Cycles.</span></li>
            <li><span>Relieve PMS.</span></li>
          </ul>
        </div>
      </div>
      <FeatureProto fimage={"/periodtracker.png"} heading="1. Track & Predict" description="Say Goodbye to Unexpected Periods! Lynshia helps you Track and Predict your cycles to prepare you before your menstruation begins." />

      <FeatureProtoFlip fimage={"/periodcramps.png"} heading="2. Reduce Cramp Pain" description="Say Goodbye to Painful Cramps! Lynshia Assistant will give you step by step procedures to reduce cramp pain within Minutes!" />

      <FeatureProto fimage={"/reminder.png"} heading="3. Reminders" description="Never Run out of Supplies again! Lynshia will remind you to stock your menstrual hygiene products before your menstruation begins with Unique Discounts and offers !" />

      <FeatureProtoFlip fimage={"/tips.png"} heading="4. Always With You" description="You're not Alone! Lynshia is a Smart Menstrual Assistant designed to assist you at Every stage of your cycle. It has dedicated Tips, Hacks and FAQ's section with Expert Guidance on almost every Topic related to Women's Health." />
    </div>
  )
}
