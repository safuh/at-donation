import Layout from '@/components/Layout'
import React from 'react'
import data from '../../utils/data';
import PurchaseRecords from '@/components/admin/purchaserecords';

export default function PurchaseHistory({ records }) {
    return (
        <Layout>
            <div className="overflow-y-auto flex justify-center" >
                <table className="min-w-max">

                    <thead className="border-b">
                        <tr>
                            <th className="p-5 text-left">DATE</th>
                            <th className="p-5 text-left">PHONE NUMBER</th>
                            <th className="p-5 text-left">AIRTIME</th>
                            <th className="p-5 text-left">AMOUNT DONATED</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {data.purchases.map((record) => (
                                <PurchaseRecords key={record.id} record={record}/>
                            ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
