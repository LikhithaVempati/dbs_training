
import CustTable from '../Components/CustTable'
import {Button} from 'primereact/button';
import React,{useState,useEffect} from 'react';
import { custFakeData } from '../Components/Customer';
import axios from 'axios';
export function CustomerPage()
{
    const [allData,setAllData] = useState(custFakeData);
    const [filteredData,setFilteredData] = useState(allData);
    const handleSearch = (event) =>{
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
        return data.bookTitle.search(value) != -1;
        });
        setFilteredData(result);
    }
    useEffect(() => {
        axios('http://localhost:8080/List/')
        .then(response => {
            console.log(response.data)
            setAllData(response.data);
            setFilteredData(response.data);
            })
            .catch(error => {
            console.log('Error getting data: ' + error);
            })
            }, []);
            
    return(
        <>
        <h3>Customer Page</h3>
        <div className="App">
<div >
<label>Search:</label>
<input type="text" onChange={(event) =>handleSearch(event)} />
</div>
<div >
{filteredData.map((value,index)=>{
return(
<div key={value.id}>
{value.title}

</div>
)
})}
</div>
</div>
        <CustTable/>
        <Button label="Show" onClick={() => alert("welcome")} />
       </>
        
    )
}