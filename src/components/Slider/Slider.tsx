'use client';
import styles from "./Slider.module.scss";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import First from "../../../public/slider/1.png";
import Second from "../../../public/slider/2.png";
import Third from "../../../public/slider/3.png";


export default function Slider() {
    const items = [
        First,
        Second,
        Third,
    ];
    const [index, setIndex] = useState(0);


    return (
        <section className={styles.Slider}>
            <div className={styles.Slider__container}>
                <AnimatePresence
                    initial={false}
                    mode={'wait'}
                >
                    <motion.div
                        className={styles.Slider__img}
                        style={{
                            backgroundImage: `url(${items[index].src})`
                        }}
                        key={index}
                        initial={{x: 300, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        exit={{x: -300, opacity: 0}}
                    />
                </AnimatePresence>
            </div>

            <div className={`${styles.Slider__controls} ${styles.fade}`}>
                {items.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`${styles.Slider__control} ${index === i ? styles.Slider__control__active : ""}`}
                    ></button>
                ))}
            </div>
        </section>
    )
}