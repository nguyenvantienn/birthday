import Card from "./Card";
import Header from "../Header/Header"

import styles from './Body.module.css'

// import {datas} from ''



const datas=[
    {
        avartar :'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg',
        name:'Nguyễn Văn A',
        birthday:'20-08-2022'
    },
    {
        avartar :'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg',
        name:'Nguyễn Văn B',
        birthday:'20-08-2022'
    },
    {
        avartar :'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg',
        name:'Nguyễn Văn C',
        birthday:'20-08-2022'
    },
    {
        avartar :'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg',
        name:'Nguyễn Văn C',
        birthday:'20-08-2022'
    },
    {
        avartar :'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg',
        name:'Nguyễn Thị A',
        birthday:'20-08-2022'
    },
    {
        avartar :'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg',
        name:'Nguyễn Thị B',
        birthday:'20-08-2022'
    }
];

const user={
    name :'Nguyen Van A',
    avartar :'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg'
};


const  Body = ()=>{
    return(
        <div>
            <Header 
                pageName='Sinh Nhật'
                user ={user}
            />
            <div>
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
                        <Card key={index} data={data}/>
                    )
                })}
            </div>
        </div>

    )
}

export default Body;