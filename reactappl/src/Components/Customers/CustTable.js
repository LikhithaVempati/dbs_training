import React,{useState} from 'react';
import {custFakeData} from './Customer';

export function CustTable(){
    const [customer,setCustomer]=useState(custFakeData);
    function getRowTags(){
        const rowTags=customer.map(c=><tr key={c.id}>
        <td>{c.id}</td>
        <td>{c.name}</td>
        <td>{c.acctNo}</td>
        <td>{c.email}</td>
        <td>{c.phone}</td>
        </tr>)
        return rowTags}
        return(
            <div>
                <h3>Cust Table Components</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Acct no</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getRowTags()}
                    </tbody>
                </table>
            </div>
        )

    }
