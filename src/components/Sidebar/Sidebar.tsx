import Link from "next/link";
import styles from "./Sidebar.module.scss";


export default function Sidebar () {
    const sidebarItems = [
        'Architecture',
        'Art & Fashion',
        'Biography',
        'Business',
        'Crafts & Hobbies',
        'Drama',
        'Fiction',
        'Food & Drink',
        'Health & Wellbeing',
        'History & Politics',
        'Humor',
        'Poetry',
        'Psychology',
        'Science',
        'Technology',
        'Travel & Maps',
    ]
    const currentPage = 'Architecture';

    return <aside className={styles.sidebar}>
        <ul className={styles.sidebar__links} id="sidebar" data-category="Architecture">
            {sidebarItems.map((item: string, index: number) => (
                <li
                    key={index}
                    className={`${styles.sidebar__link} ${currentPage === item && styles.sidebar__link__active}`}
                >
                    <Link href={`/category/${item}`}>{item}</Link>
                </li>
            ))}
        </ul>
    </aside>
}