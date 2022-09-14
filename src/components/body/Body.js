import Card from "./Card";
import Header from "../Header/Header"

import styles from './Body.module.css'

import {datas,user} from '../../data/data.js'


const  Body = ()=>{
    return(
        <div>
            <Header 
                pageName='Sinh Nhật'
                user ={user}
            />
            <div>
                {/* TEST add nhiều className
                    <button className={`${styles.btn} ${style.active}`}>Click ME! </button>
                */}
                <select className={styles.select_year}>
                    <option>2022</option>
                    <option>2023</option>
                </select>
                <select className={styles.select_day}>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </select>
            </div>

            <div className={styles.body}>
                {datas.map((data,index)=>{
                    return(
                        <Card className={styles.active} key={index} data={data} id={index}/>
                    )
                })}
            </div>
        </div>

    )
}

export default Body;