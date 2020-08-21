import React from 'react';

const ProgramsLayout: React.FunctionComponent = ({ children }) => {
    return (
        <div className='flex justify-center mt-40'>
            <div className='text-center bg-red-500 w-64 m-2'>
                {children}
            </div>
        </div>
    )
}
export default ProgramsLayout;