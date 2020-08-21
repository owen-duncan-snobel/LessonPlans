import React from 'react';
interface ProgramRegistration {
    id: number,
    programName: string,
    barcode: number,
    programTime: string,
    dayOfWeek: string,
    programStartDate: string,
    complex: string,
    numberClasses: number,
    program: Program,
    created_at: string,
    updated_at: string,
}

interface Program {
    id: number | null,
    programName: string,
    description: string,
    created_at: string,
    updated_at: string
}
const RegistrationLayout: React.FunctionComponent<ProgramRegistration> = ({
    id,
    programName,
    barcode,
    programTime,
    dayOfWeek,
    programStartDate,
    complex,
    numberClasses,
    program,
    created_at,
    updated_at
}) => {
    return (
        <div className='flex justify-center mt-10'>
            <div className='mr-20'>
                <p className='font-bold'> {programName} </p>

                <p>
                    {program.description}
                </p>
            </div>
        </div>
    )
}

export default RegistrationLayout;