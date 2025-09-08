import styles from './PageContainer.module.css'

function PageContainer ({children}) {

    return (
        <div className={styles.pageContainer}>
            {children}
            <div className={styles.pageBackground}></div>
        </div>
    )
}

export default PageContainer