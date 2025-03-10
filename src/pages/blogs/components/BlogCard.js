import Image from 'next/image';
import Link from 'next/link';

import style from '@/styles/blogs/BlogCard.module.css';

export default function BlogCard({ article }) {
    return <>
        <div className={style.card}>
            <Image src={"/images/blog/blog.jfif"} alt='Image Blog' width={100} height={80} title="Undefined" />
            <div className={style.meta}>
                <Link href={`/blogs/${article.slug}`}>
                    <p className={style.h}>{article.title}</p>
                </Link>
                <div className={style.descriptions}>
                    {article.description}
                </div>
                <div className={style.info}></div>
            </div>
            <div className={style.cta}>
                <Link href="/">Read More </Link>
            </div>
        </div>
    </>

}