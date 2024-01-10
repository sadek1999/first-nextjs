
"use client"

import { useEffect, useState } from "react";


const Users = () => {
    const [users, setusers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => { console.log(data) })
    }, [])
    return (
        <div>
            <h1>Total users: </h1>

            {
                data.map(d => {<div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{data.name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Users;