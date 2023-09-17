import styles from "./Cart.module.scss";
import Head from "next/head";
import {useSelector} from "react-redux";
import {IProfileState} from "@/store/profile";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {RootState} from "@/store";


export default function Cart() {
    const token = useSelector((state: RootState) => state.profile.token);
    const items = useSelector((state: RootState) => state.profile.cart);
    const router = useRouter();

    useEffect(() => {
        if (!token) {
            router.push("/login");
        }
    }, []);

    return (
        <>
            <Head>
                <title>Cart</title>
                <meta name="description" content="Shopping cart"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <section className={styles.cart}>
                <div>
                    <h1 className={styles.cart__bigText}>SHOPPING CART</h1>
                </div>
                {items.length === 0 && <div className={styles.center}>
                    <h3 className={styles.empty}>Cart is empty</h3></div>}
                {items.length !== 0 &&
                    <>
                        <div>
                            <table className={styles.cart__table}>
                                <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Delivery</th>
                                </tr>
                                </thead>
                                <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.book.volumeInfo.title}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.book.saleInfo.listPrice?.amount.toString()}</td>
                                        <td>Shipping: delivery</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.cart__footer}>
                            <p className={styles.cart__bigText}>TOTAL PRICE: $30.58</p>
                            <button className={styles.btn}>Checkout</button>
                        </div>
                    </>
                }
            </section>
        </>
    )
}