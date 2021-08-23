import styles from "../styles/LoaderAnim.module.css"

export default function LoaderAnim() {
    return (
        <div className={styles.loaderwrap}>
            <img src="/loader.svg"></img>
        </div>
    )
}