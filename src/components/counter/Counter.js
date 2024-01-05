'use client'
import React, { useState } from 'react';

function Counter() {
    let [count, setcount] = useState(0);
    return (
        <div>
            <h1>Count value = {count}</h1>
            <button className='btn btn-primary' onClick={() => { setcount(count++); } }>ingress</button> <br></br>
            <button className='btn btn-primary' onClick={() => { setcount(count--); } }>debris</button>
        </div>
    );
}

export default Counter;