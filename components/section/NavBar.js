import React, { useEffect, useState } from 'react';

import NavItem from '../widget/NavItem';

export default function NavBar() {
    const [show, setShow] = useState(true);

    const controlNavBar = () => {
        if (window.scrollY > 100) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavBar);
        return () => {
            window.removeEventListener('scroll', controlNavBar)
        }
    }, [])

    return (
        <header className={`fixed w-full z-10 top-0 transition-all duration-150 ease-in-out ${show ? "bg-transparent" : "bg-white drop-shadow-md"}`}>
            <div className="container mx-auto flex items-center justify-between h-20">
                <div className="uppercase text-2xl font-semibold tracking-widest text-black">
                    Nauval
                </div>
                {/* Nav */}
                <nav>
                    <ul className="flex justify-end space-x-10">
                        <NavItem href="#about">About</NavItem>
                        <NavItem href="#features">Features</NavItem>
                        <NavItem href="#products">Products</NavItem>
                        <NavItem href="#contact">Contact</NavItem>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
