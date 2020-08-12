import React from 'react';
import getPlansData from '../components/plansData';

interface PlansData {
    allStrapiPlans: {
        edges: Array<Node>
    }
}

interface Node {
    node: {
        id: string;
        author: string;
        description: string;
        title: string;
    }
}

const Plans: React.FunctionComponent = () => {
    const data: PlansData = getPlansData();
    return (
        <div>
            {data.allStrapiPlans.edges.map(plan => {
                return (
                    <div className="text-center">
                        {`checking if this is ${plan.node.title}`}
                    </div>
                )
            })}
        </div>
    )
}

export default Plans;
