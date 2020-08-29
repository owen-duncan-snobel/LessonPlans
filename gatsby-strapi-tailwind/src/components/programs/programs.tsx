import React, { useState, useEffect } from 'react';
import ProgramsLayout from './programsLayout';
import useProgramData from './fetchPrograms';

interface ProgramsData extends Array<Program> { }

interface Program {
    node: {
        id: number,
        programName: string,
        description: string,
        created_at: string,
        updated_at: string,
        category: {
            id: number,
            category: string
        }
    }
}

const Programs: React.FunctionComponent<{ programCategory: string }> = ({ programCategory }) => {
    /**
     * * Default constructor with no data
     */

    const programs: ProgramsData = useProgramData();
    /**
     *  * useProgramData queries all programs, programCategory is a prop passed 
     *  * that ensures that the category is for only the selected program aka. displays only
     *  * 'aquatics', 'ice_sports', ... 
     */
    const category = programs.filter(program => program.node.category.category === programCategory);
    return (
        <div className='flex flex-wrap justify-center  w-screen'>

            {
                category.map(program => {
                    return (

                        <ProgramsLayout
                            data={program.node}
                        />
                    )
                })
            }
        </div>
    )
}

export default Programs;
