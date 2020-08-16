import React, { useState, useEffect } from 'react';
import RegistrationLayout from './registrationLayout';
import fetchRegistration from './fetchRegistration';

interface RegistrationData extends Array<Program> { }

interface Program {
    id: number,
    programName: string,
    barcode: number,
    programTime: string,
    dayOfWeek: string,
    programStartDate: string,
    complex: string,
    numberClases: number,
    created_at: string,
    updated_at: string
}

const Registration: React.FunctionComponent = () => {
    /**
     * * Default constructor with no data
     */
    const [programs, setRegistration] = useState<RegistrationData>(
        [
            {
                'id': 0,
                'programName': '',
                'barcode': 0,
                'programTime': '',
                'dayOfWeek': '',
                'programStartDate': '',
                'complex': '',
                'numberClases': 0,
                'created_at': '',
                'updated_at': ''
            }
        ]
    )

    /**
     *  * On update/change fetches programs data and updates setData state
     */
    useEffect(() => {
        try {
            fetchRegistration().then((res) => {
                setRegistration(res.data)
            }
            )
        } catch (e) {
            console.log(e)
        }
    }, [])

    return (
        <div className='flex flex-wrap justify-center w-screen'>
            <table className="bg-red-500 w-5/6 sm:w-4/6">
                {programs.map(program => {
                    return (
                        <RegistrationLayout>
                            {program}
                        </RegistrationLayout>
                    )
                })}
            </table>
        </div>
    )
}

export default Registration;
