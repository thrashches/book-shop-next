import styles from "./Cart.module.scss";
import Head from "next/head";


export default function Cart() {
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

                        </tbody>
                    </table>
                </div>
                <div className={styles.cart__footer}>
                    <p className={styles.cart__bigText}>TOTAL PRICE: $30.58</p>
                    <button className={styles.btn}>Checkout</button>
                </div>
            </section>
        </>
    )
}