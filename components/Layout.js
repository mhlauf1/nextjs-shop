import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Store } from '../utils/store';


export default function Layout({ title, children }) {
    const { state, dispatch } = useContext(Store);


    const { cart } = state;

    const [cartItemsCount, setCartItemsCount] = useState(0);


    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
    }, [cart.cartItems]);

    return (
        <>
            <Head>
                <title>{title ? title + ' - NextJS Shop' : 'NextJS Shop'}</title>
                <meta name="description" content="Ecommerce Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex min-h-screen flex-col justify-between ">
                <header>
                    <nav className="flex h-12 justify-between shadow-md items-center px-4">
                        <Link href="/">
                            <a className="text-lg font-bold">shopper</a>
                        </Link>
                        <div>
                            <Link href="/cart"><a className="p-2">Cart
                                {cartItemsCount > 0 && (
                                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">{cartItemsCount}</span>
                                )}
                            </a></Link>
                            <Link href="/login"><a className="p-2">Login</a></Link>
                        </div>
                    </nav>
                </header>
                <main className="container m-auto mt-4 px-4">
                    {children}
                </main>
                <footer className="flex justify-center items-center h-10 shadow-inner">
                    <p>Copyright &copy; 2022 Shopper</p>
                </footer>
            </div>
        </>
    );
}
