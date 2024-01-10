
"use client"

import { useEffect, useState } from "react";


const Users = () => {
    const [users,setusers]=useState([])
    
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=>{console.log(data)})
    },[])
    return (
        <div>
            <p>This is user component</p>
        </div>
    );
};

export default Users;