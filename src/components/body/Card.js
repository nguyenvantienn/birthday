import styles from './Card.module.css'

console.log(styles);

const Card = (props) => {
    // console.log(props)
    const {name,birthday,avartar} = props.data;
    return(
        <div className={styles.card}>
            <img className={styles.img__avartar} src={avartar}/>
            <h4 className={styles.margin__around}>{name}</h4>
            <p className={styles.margin__around}>{birthday}</p>
        </div>
    )
}

export default Card;