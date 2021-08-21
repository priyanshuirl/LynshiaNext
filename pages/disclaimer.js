import styles from "../styles/Disclaimer.module.css"
import Head from "next/head"

export default function Disclaimer() {
    return (
        <div>
            <Head>
                <title>Lynshia | Disclaimer</title>
                <meta name="description"
                    content="All the information on this website - https://lynshia.netlify.app/ - is published in good faith and for general information purpose only. Lynshia does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Lynshia), is strictly at your own risk. Lynshia will not be liable for any losses and/or damages in connection with the use of our website." />
                <meta name="keywords"
                    content="periods, menstruation, period cramps, women's health, women empowerment, women, menstrual cycle, period pain, yoga, manage periods, reduce pain, track, predict, pads, tampons, menstrual cups, pms, personal, menstrual, assistant" />
            </Head>
            <div className={`${styles.aboutbanner} vflex`}>
                <h1>Disclaimer</h1>
            </div>
            <div className={`${styles.copycont} ${styles.disclaimer} vflex`}>

                <p>If you require any more information or have any questions about our site&apos;s disclaimer, please feel free to contact us by email at lynshia.app@gmail.com.</p>

                <p><b>Disclaimers for Lynshia</b></p>

                <p>All the information on this website - https://lynshia.netlify.app/ - is published in good faith and for general information purpose only. Lynshia does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Lynshia), is strictly at your own risk. Lynshia will not be liable for any losses and/or damages in connection with the use of our website.</p>

                <p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone &apos;bad&apos;.</p>

                <p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their &quot;Terms of Service&quot; before engaging in any business or uploading any information.</p>

                <p><b>Consent</b></p>

                <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

                <p><b>Update</b></p>

                <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
            </div>
        </div>
    )
}