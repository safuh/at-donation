import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';


export default function AdminSection() {
    return (
        <Layout title="Admin-Section">
            <div className='mb-3'>
                <div className='font-black uppercase text-xl mb-1'>
                    Admin Section
                </div>
                <p className='underline'>Airtime Purchase Link:</p>
                <span className='cursor-pointer text-teal-600'>https://link/qw456yu76</span>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-0 lg:grid-cols-2 bg-black " >
                <div className='card font-black text-4xl text-white m-10  uppercase' style={{ border: '2px solid-red' }}>
                    <h1 className='mb-20'>EMPOWER CHANGE</h1>
                    <h1>Lead Impact</h1>
                </div>
                <div className='card'>
                    <Image
                        src="/images/pwall.png"
                        width={300}
                        height={300}
                        alt="Profile Wall"
                    />
                </div>
            </div>
            <div className="flex   flex-col justify-between"  >
                <div className="flex items-center px-4 justify-between mb-5">
                    Fund Raising Course
                    <div className="font-black">Manicure business</div>
                </div>
                <div className="flex items-center px-4 justify-between">
                    Savings Balance
                    <div className="font-bold">ksh 1000</div>
                </div>
                <div className="flex items-center px-4 justify-between">
                    Airtime Balance
                    <div className="font-bold">ksh 1000</div>
                </div>
                <div className="flex items-center px-4 justify-between">
                    Total Airtime Bought
                    <div className="font-bold">ksh 1000</div>
                </div>
                <div className="flex items-center px-4 justify-between">
                    Subscriber Contact count
                    <div className="font-bold">ksh 1000</div>
                </div>
                <div className="mb-4 w-30 mt-10"  >
                    <button className="uppercase justify-items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                        Order History
                    </button>
                </div>
            </div>
        </Layout>
    )
}
