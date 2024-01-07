import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <body>
               <nav className='text-4xl'>This is nav bar .......................</nav>
                {children}
            </body>
        </div>
    );
};

export default layout;