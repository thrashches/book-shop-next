import styles from "./Slider.module.scss";
import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import First from "../../../public/slider/1.png";
import Second from "../../../public/slider/2.png";
import Third from "../../../public/slider/3.png";
import Image from "next/image";

const items = [
    First,
    Second,
    Third,
];

export default function Slider() {

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => prevIndex === items.length - 1 ? 0 : prevIndex + 1);
        }, 3000);
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <section className={styles.Slider}>
            <div className={styles.Slider__container}>
                <motion.div
                    // key={index}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {items.map((item, i) => (
                        <motion.div
                            key={item.src}
                            className={styles.Slider__img}
                            style={{ display: index === i ? "block" : "none", transition: "opacity 1s ease" }}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            // transition={{ repeat: Infinity, repeatDelay: 3, repeatType: "reverse" }}
                        >
                            <Image src={item.src} alt="" fill loading={"eager"} />
                        </motion.div>
                    ))}
                </motion.div>


                {/*<motion.div*/}
                {/*    className={styles.Slider__img}*/}
                {/*    // style={{*/}
                {/*    //     backgroundImage: `url(${items[index].src})`*/}
                {/*    // }}*/}
                {/*    key={index}*/}
                {/*    initial={{x: 300, opacity: 0}}*/}
                {/*    animate={{x: 0, opacity: 1}}*/}
                {/*    exit={{x: -300, opacity: 0}}*/}
                {/*    transition={{duration: 1}}*/}
                {/*>*/}
                {/*    {items.map((_, i) => (*/}
                {/*        <Image*/}
                {/*            key={i}*/}
                {/*            src={items[i].src}*/}
                {/*            alt=""*/}
                {/*            fill*/}
                {/*            loading={"eager"}*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</motion.div>*/}
            </div>

            <div className={styles.Slider__controls}>
                {items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setIndex(i);
                        }}
                        className={`${styles.Slider__control} ${index === i ? styles.Slider__control__active : ""}`}
                    ></button>
                ))}
            </div>
        </section>
    );
}