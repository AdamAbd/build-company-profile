import React from 'react'
import NavItem from '../widget/NavItem'

export default function NavBar() {
    return (
        <header className="fixed w-full z-10 top-0 bg-white">
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
    )
}
