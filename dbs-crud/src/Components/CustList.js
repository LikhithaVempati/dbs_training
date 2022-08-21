import React,{useState} from 'react';
import {custFakeData} from './Customer';

export function CustList(){
    const [customer,setCustomer]=useState(custFakeData)
    return(
        <div>
            <h3>List of customers</h3>
            <ul>
                {
                    customer.map(c=><li>{c.id}-{c.name}:{c.acctNo}</li>)
                }
            </ul>
        </div>
    )
}