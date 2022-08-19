import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import {Panel} from 'primereact/panel'
import {custFakeData} from "./Customer"
export function CustDetails(){
    const [customer,setCustomers]=useState(custFakeData)
    const params=useParams()
    useEffect(()=>{
        axios.get("http://localhost:8080/List"+params.id)
        .then(res=>setCustomers(res.data))
        .catch(err=>console.log("couldn't fetch details"))


    },[])
    return(
        <>
        <h3>Customer details:{params.id}</h3>
        <div className="mb-3">
            <Link to="/Customer">Go back to customerspage</Link>
        </div>
        <Panel header="Header">
          
        </Panel>
        </>
    )
}