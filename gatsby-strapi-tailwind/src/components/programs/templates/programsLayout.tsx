import React from 'react';
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
        <div className='bg-red-500 m-2 w-1/4 p-4'>
            <p className='font-extrabold text-3xl text-center pb-3'>{data.programName}</p>
            <p className='text-sm align-bottom relative inset-x-0 bottom-0'>{data.description.split(' ', 30).join(' ') + '...'}
                <a href={'/' + data.slug} className='underline'> read more</a>
            </p>
        </div>
    )
}
export default ProgramsLayout;