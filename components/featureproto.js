import React from "react"
import styles from "../styles/Feature.module.css"

function FeatureProto(props) {
    return (
        <div className={`${styles.featwrapper} vflex`}>
            <div className={styles.featimg} style={{ backgroundImage: `url("${props.fimage}")` }}>
            </div>
            <div className={styles.featinfo}>
                <h3>{props.heading}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
export default FeatureProto