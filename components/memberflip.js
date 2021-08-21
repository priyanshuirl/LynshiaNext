import styles from "../styles/Memberflip.module.css"

function MemberFlip(props) {
    return (
        <div className={`${styles.pblmemberflip} vflex`}>
            <div className={`${styles.pblwrapper} vflex`}>
                <div className={styles.pblmempic} style={{ backgroundImage: `url("${props.image}")` }}></div>
                <div className={`${styles.emldiv} vflex`}>
                    <div className={styles.memsocial}>
                        <a href={props.linkedin}><i className="fab fa-linkedin"></i></a>
                        <a href={props.github}><i className="fab fa-github"></i></a>
                        <a href={props.instagram}><i className="fab fa-instagram"></i></a>
                        <a href={"mailto:" + props.email}><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div className={`${styles.pblmemdesc} vflex`}>
                <h1>{props.name}</h1>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default MemberFlip
