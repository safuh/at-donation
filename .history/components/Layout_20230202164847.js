import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - a' : 'a'}</title>
        <meta name="description" content="Online-shopping Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header style={{ border: '2px solid blue' }}>
          <nav
            style={{ border: '2px solid red' }}
            className="flex h-12 items-center px-4 justify-between shadow-md"
          >
            <Link href="/" legacyBehavior>
              <a className="text-lg font-bold">Acme-Shop</a>
            </Link>
            <div style={{ border: '2px solid green' }}>
              <Link href="/cart" legacyBehavior>
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login" legacyBehavior>
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner ">
          <p>Copyright © 2023 by Acme-Devs</p>
        </footer>
      </div>
    </>
  );
}