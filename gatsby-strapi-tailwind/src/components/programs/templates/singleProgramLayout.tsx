import React from 'react';
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
const SingleProgram = ({ pageContext }: any) => {
    const { data } = pageContext;

    return <div>{data.programName}</div>
}
export default SingleProgram;