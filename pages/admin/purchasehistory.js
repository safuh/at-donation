import Layout from '@/components/Layout'
import React from 'react'

export default function PurchaseHistory() {
    return (
        <Layout>
            <div className="overflow-y-auto flex justify-center" >
                <table className="min-w-max">

                    <thead className="border-b">
                        <tr>
                            <th className="px-5 text-left">ID</th>
                            <th className="p-5 text-left">AIRTIME</th>
                            <th className="p-5 text-left">PHONE NUMBER</th>
                            <th className="p-5 text-left">AIRTIME</th>
                            <th className="p-5 text-left">AMOUNT SAVED</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <td className='p-5'>id</td>
                            <td className='p-5'>airtime</td>
                            <td className='p-5'>phonenumber</td>
                            <td className='p-5'>airtime</td>
                            <td className='p-5'>amount saved</td>     
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
