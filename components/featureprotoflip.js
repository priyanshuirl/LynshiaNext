import React from "react"
import styles from "../styles/Feature.module.css"

function FeatureProtoFlip(props) {
    return (
        <div className={`${styles.featwrapper} ${styles.flip} vflex`}>
            <div className={`${styles.flipimg} ${styles.featimg}`} style={{ backgroundImage: `url("${props.fimage}")` }}></div>
            <div className={`${styles.featinfo} ${styles.flipinfo}`}>
                <h3>{props.heading}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
export default FeatureProtoFlip