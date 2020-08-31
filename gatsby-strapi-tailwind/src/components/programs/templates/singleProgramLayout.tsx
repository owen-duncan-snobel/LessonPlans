import React from 'react';
import Navigation from '../../navigation';

interface SingleProgram {
    id: number,
    programName: string,
    description: string,
    slug: string
    created_at: string,
    updated_at: string,
    category: {
        id: number,
        category: string
    }
}
const SingleProgram: React.FunctionComponent = ({ pageContext }: any) => {
    const { data } = pageContext;
    const category: string = data.category.category.split('_').join(' ');
    return (
        <div>
            <Navigation />
            <div className='flex w-screen justify-center'>
                <div className='w-3/4 justify-center text-center bg-red-500 px-2'>
                    <p className='text-lg font-bold'>{data.programName}</p>
                    <p className='text-left'>{data.description}</p>
                    <div className='flex flex-wrap justify-center space-x-2'>
                        <img className='w-40 h-40'></img>
                        <img className='w-40 h-40'></img>
                        <img className='w-40 h-40'></img>
                    </div>
                    <p>#{category}</p>
                </div>
            </div>

        </div >
    )
}
export default SingleProgram;