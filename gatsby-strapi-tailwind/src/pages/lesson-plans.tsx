import React from 'react';
import Navigation from '../components/navigation';
import Plans from '../components/plans/plans';


const LessonPlans: React.FunctionComponent = () => {
    return (
        <div>
            <Navigation />
            <Plans />
        </div>
    )
}
export default LessonPlans;