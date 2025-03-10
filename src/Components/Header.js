import Link from 'next/link';

import style from '../styles/Header.module.css';

export default function Header() {
    return <>
        <header className={style.header}>
            <h1>AppNext</h1>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/blogs'}>Blog</Link>
                </li>
                <li>
                    <Link href={'/acount'}>Acount</Link>
                </li>
            </ul>
        </header>

    </>

}