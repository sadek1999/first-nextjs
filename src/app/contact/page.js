'use client'
import React, { useState } from 'react';

const contactPge = () => {
    let [count ,setcount]=useState(0)
    return (
        <div>
        <h1>This is contact page ll........................</h1>
        <h1>Count value = {count}</h1>
        <button className='btn btn-primary' onClick={()=>{setcount(count++)}}>incress</button>
        </div>
    );
};

export default contactPge;