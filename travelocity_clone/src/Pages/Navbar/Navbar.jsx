import styles from "./Navbar.module.css";
import Travelgo from "../../Assets/travelgo.jpg";
import HomeAccount from "../../Components/HomeAccount/HomeAccount";

const Navbar = () => {
    return (
        <div className={styles.nav_main}>
            <div className={styles.nav_first_part}>
                <div className={styles.nav_logo}>
                    <img src={Travelgo} alt="travelgo-image" />
                </div>
                <div className={styles.nav_select_tag}>
                    <select name="" id="" placeholder="More Travel">
                        <option value="">More Travel</option>
                        <option value="">Packages</option>
                        <option value="">Stays</option>
                        <option value="">Cars</option>
                        <option value="">Flights</option>
                        <option value="">Cruises</option>
                        <option value="">Things to do</option>
                        <option value="">Trips for me</option>
                        <option value="">Discover</option>
                        <option value="">Travel Deals</option>
                        <option value="">Get Inspired</option>
                        <option value="">Groups & meetings</option>
                    </select>
                </div>
            </div>
            <div className={styles.nav_second_part}>
                <div>Espanol</div>
                <div>List your property</div>
                <div>Support</div>
                <div>Trips</div>
                <div>
                    <HomeAccount login={"Sign In"} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;