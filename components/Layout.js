import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useSession } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Layout({ title, children }) {
  const { status, data: session } = useSession();
  return (
    <>
      <Head>
        <title>{title ? title + ' - AT-Donation' : 'AT-Donation'}</title>
        <meta name="description" content="AT-Donation Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav
            className="flex h-12 items-center px-4 justify-between shadow-md"
          >
            <Link href="/" legacyBehavior>
              <a className="text-lg font-bold">AT-Donation</a>
            </Link>
            <div>
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                session.user.name
              ) : (
                <Link href="/login" legacyBehavior>
                  <a className="p-2">Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner ">
          <p>Copywright @2023 by Tech Wizards</p>
        </footer>
      </div>
    </>
  );
}