import Link from "next/link";
import styles from "./Sidebar.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {IFilterState} from "@/store/filters";


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
    const selectedCategory = useSelector((state: IFilterState) => state.category)
    const dispatch = useDispatch();

    return <aside className={styles.sidebar}>
        <ul className={styles.sidebar__links} id="sidebar" data-category="Architecture">
            {sidebarItems.map((item: string, index: number) => (
                <li
                    key={index}
                    className={`${styles.sidebar__link} ${selectedCategory === item && styles.sidebar__link__active}`}
                >
                    <Link href={`/category/${item}`}>{item}</Link>
                </li>
            ))}
        </ul>
    </aside>
}