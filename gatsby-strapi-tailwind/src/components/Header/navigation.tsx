import React from 'react';
import { Link } from 'gatsby';

const Navigation: React.FunctionComponent = () => {

    return (
        <header className="flex items-center justify-between">
            {/** Generic logo for the navbar  */}
            <Link to="/" className="w-12 h-12 bg-red-500 text-5xl font-black text-center m-5">
                LP
            </Link>

            <span className="hidden sm:block font-bold">
                <Link to="/" className="inline-block m-5">
                    Home
                </Link>

                <Link to="/lessonplans" className="inline-block m-5">
                    Lesson Plans
                </Link>
            </span>
        </header >
    )
}

export default Navigation;