
import styles from './Header.module.css'

const Header =(props) => {

    return(
        <div className={styles.header}>
            <h4 style={{margin:'0 15px'}}>{props.pageName}</h4>
            <div className={styles.userImfo}>
                <img className={styles.avartarUser} src={props.user.avartar}/>
                <h4>{props.user.name}</h4>
            </div>


        </div>
    )
}

export default Header ;