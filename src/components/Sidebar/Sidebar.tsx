import Link from "next/link";
import styles from "./Sidebar.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {IFilterState} from "@/store/filters";


type SidebarProps = {
    currentCategory: string,
}

export default function Sidebar (props: SidebarProps) {
    const {currentCategory} = props;
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
    ];


    return <aside className={styles.sidebar}>
        <ul className={styles.sidebar__links} id="sidebar" data-category="Architecture">
            {sidebarItems.map((item: string, index: number) => (
                <li
                    key={index}
                    className={`${styles.sidebar__link} ${currentCategory === item && styles.sidebar__link__active}`}
                >
                    <Link href={`?subject=${item}`}>{item}</Link>
                </li>
            ))}
        </ul>
    </aside>
}