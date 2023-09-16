import styles from "./Books.module.scss";
import {IBook} from "@/data/types";
import Image from "next/image";
import React from "react";


type BooksProps = {
    books: IBook[];
}

type BuyBtnProps = {
    saleAbility: boolean,
    isInCart: boolean,
}

const BuyBtn = (props: BuyBtnProps) => {
    const {saleAbility, isInCart} = props;

    if (saleAbility && !isInCart) {
        return (
            <button className={styles.btn}>Buy now</button>
        );
    } else if (!saleAbility && !isInCart) {
        return (
            <button className={styles.btn} disabled>Buy now</button>
        );
    } else if (isInCart) {
        return (
            <button className={styles.btn}>In cart</button>
        );
    }
};


const Book = ({book}: { book: IBook }) => {
    return (
        <div className={styles.book}>
            <div className={styles.book__poster}>
                <Image src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} width={212} height={295}/>
            </div>
            <div className={styles.book__details}>
                <div className={styles.book__author}>{book.volumeInfo.authors}</div>
                <div className={styles.book__title}>{book.volumeInfo.title}</div>
                <div className={styles.book__rating}>
                    <div className={styles.book__rating__stars} style={{
                        "--rating": book.volumeInfo.averageRating ?? 0
                    } as React.CSSProperties}></div>
                    <div className={styles.book__rating__reviews}>{book.volumeInfo.ratingsCount ?? 0} reviews</div>
                </div>
                <div
                    className={styles.book__description}>
                    {book.volumeInfo.description?.substring(0, 100)} {
                    book.volumeInfo.description?.length && book.volumeInfo.description?.length > 100 ? "..." : ""}
                </div>
                <div className={styles.book__price}>
                    {book.saleInfo.listPrice?.amount ?? "NOT FOR SALE"} {book.saleInfo.listPrice?.currencyCode}
                </div>
                <BuyBtn saleAbility={book.saleInfo.saleability === "FOR_SALE"} isInCart={false}/>
            </div>
        </div>
    );
};

export default function Books(props: BooksProps) {
    const {books} = props;

    return <section>
        <div className={styles.book__list}>
        {books.map(book => <Book key={book.id} book={book}/>)}
    </div>
    </section>;
}