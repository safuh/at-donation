import Layout from '@/components/Layout'
import React, { useEffect, useReducer } from 'react'

import axios from 'axios';
import { getError } from '@/utils/error';


function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, purchases: action.payload, error: '' };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

function PurchaseHistory({ records }) {
    const [{ loading, error, purchases }, dispatch] = useReducer(reducer, {
        loading: true,
        purchases: [],
        error: '',
    });

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                dispatch({ type: 'FETCH_REQUEST' });
                const { data } = await axios.get(`/api/purchases/history`);
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: getError(err) })
            }
        }
        fetchPurchases();
    }, []);
    return (
        <Layout title="Purchase History">
            <div className="overflow-y-auto flex justify-center" >
                <table className="min-w-max">

                    <thead className="border-b">
                        <tr>
                            <th className="p-5 text-left">ID</th>
                            <th className="p-5 text-left">DATE</th>
                            <th className="p-5 text-left">PHONE NUMBER</th>
                            <th className="p-5 text-left">DONATION</th>
                            <th className="p-5 text-left">AIRTIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchases.map((purchase) => (
                            <>
                                <tr key={purchase._id} className='border-b'>
                                    <td className='p-5'>{purchase._id.substring(20, 24)}</td>
                                    <td className='p-5'>{purchase.createdAt.substring(0, 10)}</td>
                                    <td className='p-5'>{purchase.phonenumber}</td>
                                    <td className='p-5'>{purchase.donation}</td>
                                    <td className='p-5'>ksh {purchase.airtime}</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

PurchaseHistory.auth = true;

export default PurchaseHistory;