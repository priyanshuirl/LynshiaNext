import Head from "next/head"
import styles from "../styles/PeopleBehindLynshia.module.css"
import MemberFlip from "../components/memberflip"
import Member from "../components/member"

export default function PeopleBehindLynshia() {
    return (
        <div>
            <Head>
                <title>Lynshia | People Behind Lynshia</title>
                <meta name="description"
                    content="Co-Founded by Priyanshu Mishra and Arshia Sandhu, Meet the Awesome People who Made Lynshia Happen. " />
                <meta name="keywords"
                    content="periods, menstruation, period cramps, women's health, women empowerment, women, menstrual cycle, period pain, yoga, manage periods, reduce pain, track, predict, pads, tampons, menstrual cups, pms, personal, menstrual, assistant" />
            </Head>
            <div className={`${styles.pblbanner} vflex`}>
                <h1>People Behind Lynshia</h1>
            </div>
            <div className={`${styles.pblcont} vflex`}>
                <h2>Meet the Awesome People who Made Lynshia Happen.</h2>
            </div>
            <div className={`${styles.pbl} vflex`}>

                <Member image={"/shu.jpg"} name="Priyanshu Mishra" title="Co-Founder and President" description="Swiss Army Knife! From the Frontend and Backend to Marketing and SEO there's no challenge he can't Handle. A CSE major Undergrad Student and a Full Stack developer with an Eye for Design, he has Excellent experience in Project Management and Leading Successful teams. Right from the Inception and Ideation to Prototyping and Development, he has played a crucial role in making the Lynshia a Reality." linkedin="https://www.linkedin.com/in/priyanshuirl/" github="https://github.com/priyanshuirl" email="priyanshu12651265@gmail.com" instagram="https://www.instagram.com/priyanshu_irl_/" />

                <MemberFlip image={"/shia.jpg"} name="Arshia Sandhu" title="Co-Founder and CEO" description="Miss Magic! With her unparalleled Creativity and Development Skills, Arshia gave Lynshia its magic. A Bachelor of Computer Science student from the University of Guelph and A Full Stack Developer, she holds a minor in Project Management. Arshia never fails to amaze us with her Creative solutions to Challenging Problems and out of the box Ideas. She is the Driving Force behind Team Lynshia." linkedin="https://www.linkedin.com/in/arshiasandhu/" github="https://github.com/arshiaaaa" email="arshiasandhu07@gmail.com" instagram="https://www.instagram.com/arshiaaa._._/" />

            </div>
        </div>
    )
}