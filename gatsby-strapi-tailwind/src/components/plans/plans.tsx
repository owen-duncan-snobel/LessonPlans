import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface PlansData extends Array<Plan> { }

interface Plan {
    id: number | null,
    title: string,
    description: string,
    author: string,
    created_at: string,
    updated_at: string
}

const Plans: React.FunctionComponent = () => {
    /** Default Constructor with no Data */
    const [data, setData] = useState<PlansData>(
        [
            {
                'id': null,
                'title': '',
                'description': '',
                'author': '',
                'created_at': '',
                'updated_at': ''
            }
        ]
    )

    useEffect(() => {
        const fetchPlans = async () => {
            const results = await axios({
                method: 'GET',
                url: 'http://localhost:1337/plans',
            })
            setData(results.data);
        }
        fetchPlans();
    }, [])

    return (
        <div>
            {data.map(plan => {
                return (
                    <div className='text-center' key={plan.id}>
                        {`checking if this is ${plan.title}`}
                    </div>
                )
            })}
        </div>
    )
}

export default Plans;
