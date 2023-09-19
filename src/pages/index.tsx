import Head from 'next/head';
import {Inter} from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import Slider from "@/components/Slider/Slider";
import Books from "@/components/Books/Books";
import {useLazyGetBooksBySubjectQuery} from "@/api/booksApi";
import React, {useEffect, useState} from "react";
import {IBook} from "@/data/types";
import {GetServerSideProps, GetStaticProps, InferGetStaticPropsType, InferGetServerSidePropsType} from "next";
import Loader from "@/components/Loader/Loader";
import {removeDuplicates} from "@/data/utils";

const inter = Inter({subsets: ['latin']});

export const getServerSideProps = (async (params: { query: { subject: string | null } }) => {
    const urlParams = new URLSearchParams();
    const subject = params.query.subject ? params.query.subject : "Architecture";
    urlParams.append("q", `"subject:${subject}"`);
    urlParams.append("pageIndex", "0");
    urlParams.append("maxResults", "6");
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?" + urlParams.toString());
    const data: { items: IBook[] } = await response.json();
    return {
        props: {
            data: removeDuplicates(data.items),
            subject: subject,
        }
    }
})

export default function Home({data, subject}: InferGetServerSidePropsType<GetServerSideProps>) {
    const [nextPageIndex, setNextPageIndex] = useState(6);
    const [books, setBooks] = useState(data);
    const [trigger, result, lastPromiseInfo] = useLazyGetBooksBySubjectQuery();
    const [loading, setLoading] = useState(false);
    const [canLoadMore, setCanLoadMore] = useState(true);

    const handleLoadMore = () => {
        setLoading(true);
        trigger({subject: subject, pageIndex: nextPageIndex});
        setNextPageIndex(nextPageIndex + 6);
    };

    useEffect(() => {
        if (result.isSuccess && result.data) {
            console.log(result.data);
            setBooks(removeDuplicates([...books, ...result.data]));
            setCanLoadMore(true);
        }
        setLoading(false);
    }, [result]);

    return (
        <>
            <Head>
                <title>Book shop</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <Slider/>
                <section className={styles.books}>
                    <Sidebar currentCategory={subject}/>

                    {books ? <Books books={books}/> : <div className={styles.noContent}>No items found...</div>}
                    {canLoadMore ?
                        <div className={styles.btnWrapper}>
                            {loading && <Loader/>}
                            <button
                                className={styles.btn}
                                style={{width: "100%"}}
                                onClick={handleLoadMore}
                            >Load more
                            </button>
                        </div>
                        : <></>
                    }
                </section>
            </main>
        </>
    );
}
