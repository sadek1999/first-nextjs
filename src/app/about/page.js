import Image from 'next/image';
import React from 'react';

export const metadata = {
    title: 'About Page',
    Description: "This is about page "
}

const Aboutpage = async () => {

    const res = await fetch('http://localhost:3000/post',{
        cache:'force-cache'
    })
    const posts = await res.json()
    console.log(posts)
    return (
        <div>
            <p></p>

            <h1 className='text-4xl'>Total posts ={posts.length} </h1>
            {posts.map((post) =>
                <div key={post.id} className="card card-compact w-96 bg-base-100 mx-au shadow-xl">
                    
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            )}



            <h1>Welcome to about page ............</h1>
            <Image src="https://faraitltd.com/wp-content/uploads/2023/02/Screenshot_7.jpg" alt='web img' width={200} height={400} />

        </div>
    );
};

export default Aboutpage;