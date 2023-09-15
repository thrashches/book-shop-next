import Head from 'next/head';
import {Inter} from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import Slider from "@/components/Slider/Slider";
import Books from "@/components/Books/Books";
import {books} from "@/data/mockData";
import {booksApi, useGetBooksBySubjectQuery} from "@/api/booksApi";

const inter = Inter({subsets: ['latin']});

export default function Home() {
    const {books, error, isLoading} = useGetBooksBySubjectQuery();

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
                    <Sidebar/>
                    <Books books={books}/>
                </section>
            </main>
        </>
    );
}
