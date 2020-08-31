import React from 'react';
import { Link } from 'gatsby';

interface Data {
    id: number,
    programName: string,
    description: string,
    slug: string,
    created_at: string,
    updated_at: string,
    category: {
        id: number,
        category: string
    }
}
const ProgramsLayout: React.FunctionComponent<{ data: Data }> = ({ data }) => {
    return (
        <div className='sm:w-1/4 bg-red-500 m-2 p-4'>
            <p className='font-extrabold text-3xl text-center pb-3'>{data.programName}</p>
            <div className='break-words pt'>
                {data.description.split(' ', 30).join(' ') + '...'}

                <div className='flex w-full justify-end pt-2'>
                    <button className=' bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded'>
                        <Link to={'/' + data.slug}> Read More </Link>
                    </button>
                </div>
            </div>
        </div >
    )
}
export default ProgramsLayout;