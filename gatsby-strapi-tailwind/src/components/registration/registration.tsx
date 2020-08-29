import React, { useState, useEffect } from 'react';
import fetchRegistration from './fetchRegistration';
import RegistrationSearchBar from './registration-search/registrationSearch';
import RegistrationProgram from './registrationLayout';
import _ from 'lodash';

interface RegistrationData extends Array<ProgramRegistration> { }

/**
 * * Program Registration will be a Registration Object that holds the barcode,id,time,... 
 * * that is available to be registered for a specified 'program' 
 * *  ex) Swimmer 1, Wednesday, 1-2pm, @ Oakville , ...
 */
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
    updated_at: string,
    category: {
        id: number,
        category: string
    }
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

const Registration: React.FunctionComponent = () => {
    /**
     * * Default constructor with no data
     */
    const [registrations, setRegistrations] = useState<RegistrationData>(
        [
            {
                'id': 0,
                'programName': '',
                'barcode': 0,
                'programTime': '',
                'dayOfWeek': '',
                'programStartDate': '',
                'complex': '',
                'numberClasses': 0,
                'program': {
                    'id': null,
                    'programName': '',
                    'description': '',
                    'created_at': '',
                    'updated_at': ''
                },
                'created_at': '',
                'updated_at': '',
                'category': {
                    id: 0,
                    category: ''
                }
            }
        ]
    )

    const [error, setError] = useState(false);

    /**
     *  * On update/change fetches registrations data and updates setData state
     */
    useEffect(() => {
        try {
            /**
             *  * Fetch Program Registration Data and ensure that the response is valid
             */
            fetchRegistration()
                .then((res) => {
                    if (res.status) {
                        setRegistrations(res.data)
                    } else {
                        setError(res)
                    }
                })
        } catch (e) {
            console.log(e)
        }
    }, [])

    const groupedPrograms: [string, ProgramRegistration[]][] = _.chain(registrations)
        .groupBy('programName')
        .entries()
        .value();

    return (
        <div className='flex flex-wrap justify-center w-screen gap-4'>
            <div className='w-1/6'>
                <RegistrationSearchBar />
            </div>
            <div className="w-4/6">
                <p className=' text-md font-bold bg-red-500 text-gray-900 p-2'>Program</p>
                {
                    groupedPrograms.map((program) => {

                        const programName = program[0];
                        const programRegistrationAvailability = program[1];
                        const programDescription = programRegistrationAvailability[0].program.description;
                        return (
                            <div className='flex justify-center mt-10 mb-10'>
                                <div className='mr-20'>
                                    <p className='font-bold'>{programName}</p>
                                    <p>{programDescription}</p>
                                    <RegistrationProgram
                                        data={programRegistrationAvailability}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Registration;
