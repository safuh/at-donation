/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React, { useReducer, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import axios from 'axios';
import { getError } from '@/utils/error';
import { toast } from 'react-toastify';


function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, donations: action.payload, error: '' };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        case 'CREATE_REQUEST':
            return { ...state, loadingCreate: true };
        case 'CREATE_SUCCESS':
            return { ...state, loadingCreate: false };
        case 'CREATE_FAIL':
            return { ...state, loadingCreate: false };
        case 'DELETE_REQUEST':
            return { ...state, loadingDelete: true };
        case 'DELETE_SUCCESS':
            return { ...state, loadingDelete: false, successDelete: true };
        case 'DELETE_FAIL':
            return { ...state, loadingDelete: false };
        case 'DELETE_RESET':
            return { ...state, loadingDelete: false, successDelete: false };

        default:
            return state;
    }
};





export default function index() {
    const router = useRouter();

    const [
        { loading, error, donations, loadingCreate, successDelete, loadingDelete },
        dispatch,] = useReducer(reducer, {
            loading: true,
            donations: [],
            error: '',
        });
    const createHandler = async () => {
        if (!window.confirm('Are you sure?')) {
            return;
        }
        try {
            dispatch({ type: 'CREATE_REQUEST' });
            const { data } = await axios.post(`/api/donations`);
            dispatch({ type: 'CREATE_SUCCESS' });
            toast.success('Donation created successfully');
            router.push(`/admin/donations/${data.donation._id}`);
        } catch (err) {
            dispatch({ type: 'CREATE_FAIL' });
            toast.error(getError(err));
        }
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch({ type: 'FETCH_REQUEST' });
                const { data } = await axios.get(`/api/donations`);
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (error) {
                dispatch({ type: 'FETCH_FAIL', payload: getError(error) });
            }
        }

        if (successDelete) {
            dispatch({ type: 'DELETE_RESET' });
        } else {
            fetchData();
        }
    }, [successDelete]);

    const deleteHandler = async (donationId) => {
        if (!window.confirm('Are you sure?')) {
            return;
        }
        try {
            dispatch({ type: 'DELETE_REQUEST' });
            console.log(donationId);
            await axios.delete(`/api/admin/donations/${donationId}`);
            dispatch({ type: 'DELETE_SUCCESS' });
            toast.success('Product deleted successfully');
        } catch (err) {
            dispatch({ type: 'DELETE_FAIL' });
            toast.error(getError(err));
        }
    };
    return (
        <Layout title='Donations List'>
            <div className="overflow-x-auto md:col-span-3">
                <div className="flex justify-between">
                    <h1 className="mb-4 text-xl font-black">Donations List</h1>
                    <button
                        disabled={loadingCreate}
                        onClick={createHandler}
                        className="primary-button"
                    >
                        Create
                    </button>
                </div>
                {loading ? (
                    <div>loading...</div>
                ) : error ? (
                    <div className="alert-error">{error}</div>
                ) : (
                    <div className="min-w-full">
                        <table className="min-w-full">
                            <thead className="border-b">
                                <tr>
                                    <th className="px-5 text-left">ID</th>
                                    <th className="p-5 text-left">DATE</th>
                                    <th className="p-5 text-left">DONATION TITLE</th>
                                    <th className="p-5 text-left">TARGET AMOUNT</th>
                                    <th className="p-5 text-left">DESCRIPTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {donations.map((donation) => (
                                    <tr key={donation._id} className="border-b">
                                        <td className=" p-5 ">{donation._id.substring(20, 24)}</td>
                                        <td className=" p-5 ">{donation.createdAt}</td>
                                        <td className=" p-5 ">{donation.donationtitle}</td>
                                        <td className=" p-5 ">{donation.targetamount}</td>
                                        <td className=" p-5 ">{donation.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </Layout>
    )
}
