import Image from 'next/image';
import React from 'react';

export const metadata={
    title :'About Page',
    Description:"This is about page "
}

const Aboutpage = () => {
    return (
        <div>
            <h1>Welcome to about page ............</h1>
            <Image src="https://faraitltd.com/wp-content/uploads/2023/02/Screenshot_7.jpg" alt='web img' width={200} height={400}/>
            
        </div>
    );
};

export default Aboutpage;