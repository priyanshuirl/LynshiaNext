import styles from "../styles/Copyright.module.css"
import Head from "next/head"
import Script from 'next/script'

export default function Copyright() {
    return (
        <div>
            <Head>
                <title>Lynshia | Copyright</title>
                <meta name="description"
                    content="The text, design, images, photographs, audio and video are considered to be the Intellectual Property of the owner of this channel, and are protected by DMCA.com Protection Pro Service using but not limited to the Digital Millennium Copyright Act Title 17 Chapter 512 (c)(3)." />
                <meta name="keywords"
                    content="periods, menstruation, period cramps, women's health, women empowerment, women, menstrual cycle, period pain, yoga, manage periods, reduce pain, track, predict, pads, tampons, menstrual cups, pms, personal, menstrual, assistant" />
            </Head>
            <div className={`${styles.aboutbanner} vflex`}>
                <h1>Copyright</h1>
            </div>
            <div className={`${styles.copycont} vflex`}>
                <div className={styles.dcmacopy}>
                    <a href={"//www.dmca.com/Protection/Status.aspx?ID=02110291-7bee-4587-aee6-ae5f55d1e5a4"} title="DMCA.com Protection Status" className="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca-badge-w250-2x1-03.png?ID=02110291-7bee-4587-aee6-ae5f55d1e5a4" alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
                </div>
                <p><b>Protection:</b> This Uniform Resource Locator or URL: https://lynshia.netlify.app/ is owned or published under permission by the owner of this channel. The audio and or video presentation is original content and or contains original content published under permission including but not limited to text, design, images, photographs, audio and video and are considered to be the Intellectual Property of the owner of this channel, whether copyrighted or not, and are protected by DMCA.com Protection Pro Service using but not limited to the Digital Millennium Copyright Act Title 17 Chapter 512 (c)(3). Reproduction or re-publication of this content is prohibited without permission. This statement and the protection service connected to it is no way a replacement of or connected to any similar statements or services provided to the content owner by this service platform.<br /><br /><br />
                    <b>Digital Millennium Copyright Act:</b> Is part of US Copyright Law. It addresses penalties for copyright infringement found on the Internet. This act protects content creators by "establishing procedures for proper notification" to OSPs when copyright infringement is identified online. Online Copyright Infringement Liability Limitation Act (OCILLA), Title II is part of the DMCA as Section 512 to the Copyright Act and creates a conditional safe harbour to liability for copyright infringement by online service providers. These procedures allow proper DMCA Takedown Notices to be filed by the owner of this website or DMCA.com, as their designated agent, to an OSP in case infringed material has been detected on their servers.</p>
                <div className={styles.dcmacopy}>
                    <a href="//www.dmca.com/Protection/Status.aspx?ID=02110291-7bee-4587-aee6-ae5f55d1e5a4" title="DMCA.com Protection Status" className="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca-badge-w250-5x1-10.png?ID=02110291-7bee-4587-aee6-ae5f55d1e5a4" alt="DMCA.com Protection Status" /></a>  <Script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </Script>
                </div>
            </div>
        </div>
    )
}