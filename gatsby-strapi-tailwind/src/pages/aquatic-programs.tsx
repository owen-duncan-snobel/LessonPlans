import React from 'react';
import Navigation from '../components/navigation';
import Programs from '../components/programs/programs';


const AquaticPrograms: React.FunctionComponent = () => {
    return (
        <div>
            <Navigation />
            <Programs programCategory="aquatics" />
        </div>
    )
}
export default AquaticPrograms;