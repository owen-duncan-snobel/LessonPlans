import React, { useState } from 'react';
import moment from 'moment';

interface ProgramRegistration {
    id: number,
    programName: string,
    barcode: number,
    programTime: string,
    dayOfWeek: string,
    programStartDate: string,
    complex: string,
    program: Program
    numberClasses: number,
    created_at: string,
    updated_at: string
}
/**
 *  * Program holds the properties and description for a program ex.) Swimmer 1, Swimmer 2
 */
interface Program {
    id: number | null,
    programName: string,
    description: string,
    created_at: string,
    updated_at: string
}


const RegistrationProgram: React.FunctionComponent<{ data: ProgramRegistration[] }> = ({ data }) => {

    const [toggleProgram, setToggleProgram] = useState(false);

    return (
        < div >
            <button
                className='bg-red-500 hover:bg-red-400 py-1 px-1 rounded mt-1 focus'
                onClick={() => setToggleProgram(!toggleProgram)}  >
                Show Courses
            </button>
            <div className={(toggleProgram ? 'block' : 'hidden')} >
                <table className='table-auto w-full mt-2'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th>Course</th>
                            <th>Barcode</th>
                            <th>Times</th>
                            <th>Dates</th>
                            <th>Complex</th>
                            <th>Classes</th>
                        </tr>
                    </thead>

                    {data.map(program => {
                        const time = moment(program.programTime, 'h:mm:ss.sss').format('LT');
                        const startDate = moment(program.programStartDate).format('MMMM Do YYYY');
                        return (
                            <tr>
                                <td>{program.programName}</td>
                                <td>{program.barcode}</td>
                                <td>{time}</td>
                                <td>{program.dayOfWeek + ' ' + startDate}</td>
                                <td>{program.complex.split('_').join(' ')}</td>
                                <td>{program.numberClasses}</td>
                            </tr>
                        )
                    })}

                </table>

            </div>
        </div >
    )
}
export default RegistrationProgram;
