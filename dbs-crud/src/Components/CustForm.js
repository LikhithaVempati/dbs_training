//import axios from 'axios'
import {useState} from 'react'
import {Button} from 'primereact/button'
import axios from 'axios'
import  {Navigate}  from 'react-router-dom'
import { custFakeData } from './Customer'
export function CustForm(){
    const [name,setName]=useState('')
    const [acctNo,setAcctNo]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    const handleAcctNoChange=(e)=>{
        setAcctNo(e.target.value)
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handlePhoneChange=(e)=>{
        setPhone(e.target.value)
    }

    const validateCustomer=()=>{
        let isValid=true 
        if(name===""||name.length<=8||name.length>20){
            isValid=false 
        }
        if(acctNo===""){
            isValid=false
        }
        if(email===""){
            isValid=false
        }
        if(phone===""){
            isValid=false
        }
        return isValid
    }

    const submitCustomer=()=>{
        const customer={name,acctNo,email,phone}
        console.log("new customer:",customer)
        const valid=validateCustomer()
        if(!valid){
            alert("invalid")
            return
        }
        else{
            axios.post("http://localhost:3000/Customer/",custFakeData)
            .then(res=>{
                Navigate("/Customer")
            })
            .catch(err=>{
                alert("error")
            })
        }
    }
    return(
        <>
        <div><h3>Create new customer</h3></div>
        <div>
            <div>
                Name:<input type="text" onChange={(e)=>handleNameChange(e)}/>
            </div>

            <div>
                Acct No:<input type="text" onChange={(e)=>handleAcctNoChange(e)}/>
            </div>

            <div>
                Email:<input type="text" onChange={(e)=>handleEmailChange(e)}/>
            </div>

            <div>
                Phone:<input type="text" onChange={(e)=>handlePhoneChange(e)}/>
            </div>

            <Button label="Submit" onClick={submitCustomer}></Button>
        </div>
        </>
    )
}