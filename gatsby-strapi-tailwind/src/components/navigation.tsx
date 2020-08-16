import React from 'react';
import { Link } from 'gatsby';

const Navigation: React.FunctionComponent = () => {

    return (
        <header className="flex items-center justify-between">
            {/** Generic logo for the navbar  */}
            <Link to="/" className="w-12 h-12 bg-red-500 text-5xl font-black text-center m-5">
                LP
            </Link>

            {/** Navbar links */}
            <nav>
                <span className="hidden sm:block font-normal">
                    <Link to="/" className="m-5" activeClassName="font-bold">
                        Home
                </Link>
                    <Link to="/program-registration" className="m-5" activeClassName="font-bold">
                        Program Registration
                </Link>

                    <Link to="/aquatic-programs" className="m-5" activeClassName="font-bold">
                        Aquatic Programs
                </Link>
                </span>
            </nav>
        </header >
    )
}

export default Navigation;
