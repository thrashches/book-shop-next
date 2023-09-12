import styles from "./Navbar.module.scss";
import Link from "next/link";


export default function Navbar() {
    return (
        <header>
            <nav className={styles.Navbar}>
                <div className={styles.Navbar__logo}>
                    <Link href="/"> Bookshop </Link>
                </div>
                <div className={styles.Navbar__links}>
                    <div>
                        <Link href="/" className={styles.Navbar__links__link + " " + styles.Navbar__links__link__active}> Books </Link>
                    </div>
                    <div>
                        <a href="#" className={styles.Navbar__links__link}> Audiobooks </a>
                    </div>
                    <div>
                        <a href="#" className={styles.Navbar__links__link}> Stationery & gifts </a>
                    </div>
                    <div>
                        <a href="#" className={styles.Navbar__links__link}> Blog </a>
                    </div>
                </div>
                <div className={styles.Navbar__profile}>
                    <button className={styles.profile__btn + " " + styles.profile__btn__user}></button>
                    <button className={styles.profile__btn + " " + styles.profile__btn__search}></button>
                    <Link href={"/cart"} className={styles.profile__btn + " " + styles.profile__btn__basket}>
                        <div className={styles.basket__items} id="basketItems"></div>
                    </Link>
                </div>
            </nav>
        </header>
    )
}