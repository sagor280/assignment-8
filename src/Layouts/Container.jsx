import React from 'react';

const Container = ({children}) => {
    return (
        <div>
              <div className='container mx-auto px-2'>
            {children}
        </div>
        </div>
    );
};

export default Container;