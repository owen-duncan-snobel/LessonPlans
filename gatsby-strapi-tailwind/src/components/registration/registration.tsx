import React, { useState, useEffect } from 'react';
import RegistrationLayout from './registrationLayout';
import fetchRegistration from './fetchRegistration';
import RegistrationSearchBar from './registration-search/registrationSearch';

interface RegistrationData extends Array<ProgramRegistration> { }

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
                'updated_at': ''
            }
        ]
    )

    //const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    /**
     *  * On update/change fetches registrations data and updates setData state
     */
    useEffect(() => {
        try {
            /** 
            *   * Set loading to be true for loading async request
            */
            //   setLoad(true);

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
            /**
             * * Set loading to be false for finished async request
             */
            //   setLoad(false);
        } catch (e) {
            console.log(e)
        }
    }, [])

    return (
        <div className='flex flex-wrap justify-center w-screen gap-4'>
            <div className='w-1/6'>
                <RegistrationSearchBar />
            </div>
            <div className="w-4/6">
                <p className=' text-md font-bold bg-red-500 text-gray-900 p-2'>Program</p>
                {registrations.map(registration => {
                    return (
                        <RegistrationLayout
                            key={registration.programName + '_' + registration.complex + '_' + registration.programStartDate}
                            id={registration.id}
                            programName={registration.programName}
                            barcode={registration.barcode}
                            programTime={registration.programName}
                            dayOfWeek={registration.dayOfWeek}
                            programStartDate={registration.programStartDate}
                            complex={registration.complex}
                            program={registration.program}
                            numberClasses={registration.numberClasses}
                            created_at={registration.created_at}
                            updated_at={registration.updated_at}
                        >
                        </RegistrationLayout>
                    )
                })}
            </div>
        </div>
    )
}

export default Registration;
