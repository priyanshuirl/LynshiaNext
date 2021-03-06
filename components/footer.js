import styles from "../styles/Footer.module.css"
import Head from 'next/head'
import ActiveLink from './activeLinks'

export default function Footer() {
    function copy() {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        var toastbtn = document.getElementById("copytoast");
        toastbtn.classList.add(styles.displaytoast);
        setTimeout(() => { toastbtn.classList.remove(styles.displaytoast); }, 2500);
    }
    return (
        <div>
            <Head>
                <script src="https://kit.fontawesome.com/2ac5c57d76.js"></script>
            </Head>
            <div className={`${styles.purplediv} vflex`}>
                <h2>Making Periods Easier to Manage.</h2>
                <ActiveLink activeClassName="active" href="/comingsoon"><a><h4>Sign Up Today!</h4></a></ActiveLink>
            </div>
            <footer className={`${styles.foot} vflex`}>
                <div className="vflex">
                    <ActiveLink href="/"><a>
                        <div className={`${styles.logo} ${styles.flogo}`}>
                            <h3>Lynshia</h3>
                            <p>Menstrual Assistant</p>
                        </div>
                    </a>
                    </ActiveLink>
                    <div className={styles.social}>
                        <a href="https://twitter.com/Lynshia_app" ><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/lynshia_app/"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/lynshia/"><i className="fab fa-linkedin-in"></i></a>
                        <button onClick={copy}><i className="fas fa-share-alt"></i></button>
                        <p>&copy; All Rights Reserved</p>
                    </div>
                </div>
                <div className={`${styles.list} vflex`}>
                    <div className={styles.footone}>
                        <p className={styles.footh}>Legal</p>
                        <ul>
                            <li><ActiveLink activeClassName="active" href="/copyright"><a>Copyright</a></ActiveLink></li>
                            <li><ActiveLink activeClassName="active" href="/privacypolicy"><a>Privacy&nbsp;Policy</a></ActiveLink></li>
                            <li><ActiveLink activeClassName="active" href="/termsofuse"><a>Terms of Use</a></ActiveLink></li>
                            <li><ActiveLink activeClassName="active" href="/disclaimer"><a>Disclaimer</a></ActiveLink></li>
                        </ul>
                    </div>
                    <div className={styles.footone}>
                        <p className={styles.footh}>Menu</p>
                        <ul>
                            <li><ActiveLink activeClassName="active" href="/"><a>Home</a></ActiveLink></li>
                            <li><ActiveLink activeClassName="active" href="/aboutus"><a>About&nbsp;Us</a></ActiveLink></li>
                            <li><ActiveLink activeClassName="active" href="/peoplebehindlynshia"><a>People&nbsp;Behind&nbsp;Lynshia</a></ActiveLink></li>
                            <li><ActiveLink activeClassName="active" href="/careers"><a>Careers</a></ActiveLink></li>
                        </ul>
                    </div>
                    <div className={styles.footone}>
                        <p className={styles.footh}>Contact <i className="fas fa-envelope"></i></p>
                        <ul>
                            <a href="mailto:lynshia.app@gmail.com"><li>lynshia.app@gmail.com</li></a>
                        </ul>
                        <div className={styles.dmca}>
                            <a href="//www.dmca.com/Protection/Status.aspx?ID=02110291-7bee-4587-aee6-ae5f55d1e5a4" title="DMCA.com Protection Status" className="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca-badge-w200-2x1-03.png?ID=02110291-7bee-4587-aee6-ae5f55d1e5a4" alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
                        </div>
                    </div>
                </div>
            </footer>
            <p className={styles.copytoast} id="copytoast">Link&nbsp;Copied!</p>
        </div>
    )
}