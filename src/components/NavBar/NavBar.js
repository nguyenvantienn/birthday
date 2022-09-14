import NavBarPage from './NavBarPage.js'
import LogoNavBar from './LogoNaBar.js'
import styles from './NavBar.module.css'

// console.log(styles);

const NavBar = ()=>{
    return(
        <div className={styles.NavBar}>
            <img className={styles.navBar__Logo} src='https://tinasoft.vn/wp-content/uploads/2021/02/Asset-3.png'/>
            <div className={styles.navBar__Page}>
                <NavBarPage page='Bảng Lương'/>
                <NavBarPage page='Đơn xin nghỉ phép'/>
                <NavBarPage page='Sự kiện công ty'/>
                <NavBarPage page='Sinh nhật'/>
                <NavBarPage page='Thông tin cá nhân'/>
                <NavBarPage page='Nội quy - Quy định'/>
                <NavBarPage page='Lịch làm việc'/>
            </div>
            
        </div>
    )
}

export default NavBar;