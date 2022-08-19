
import React, { useState } from 'react'
import {custFakeData} from "./Customer"
import {Link} from 'react-router-dom'
import axios from 'axios'

function CustTables() {
    const [customers, setcustomers] = useState(custFakeData)

   const deleteCust=(id)=>{
       axios.delete("http://localhost:3000/customers/"+id)
       .then(res=>{
           const listAfterDeletion=customers.filter(c=>c.id!==id)
           setcustomers(listAfterDeletion)
       }).catch(err=>{alert("couldn't delete")})
   }
    function getRowTags(){ 
        return (
    customers.map(c=> <tr key={c.id}>
                    <td>{c.id}</td>
        <td><Link to={"/Customer/"+c.id}>{c.name}</Link></td>
                    <td>{c.acctNo}</td>
                    <td>{c.email}</td>
                    <td>{c.phone}</td>
                 
                </tr>)
)
    }
    return (
        <div>
            <p>{getRowTags()}</p>
        </div>
    )
}

export default CustTables

