import React from 'react'

export default function PurchaseRecords({record}) {
  return (
    <tr className='border-b'>
      <td className='p-5'>{record.date}</td>
      <td className='p-5'>{record.phonenumber}</td>
      <td className='p-5'>{record.airtime}</td>
      <td className='p-5'>ksh {record.amountsaved}</td>
    </tr>

  )
}
