import React from 'react';
import Link from 'next/link';

export default function NavItem({ href, children }) {
    return (
        <li><Link href={href} className="text-black text-lg text-opacity-60 hover:text-opacity-100 transition font-semibold">{children}</Link></li>
    );
};
