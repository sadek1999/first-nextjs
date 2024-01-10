import React from 'react';

const DetailsPage = async({params}) => {
    console.log(params)
 const res= await fetch(`http://localhost:3000/post/${params.id}`)
 const post=res.json()
 console.log(post)
    return (
        <div>
            <h1>This is details page :  </h1>
        </div>
    );
};

export default DetailsPage;