import React from 'react';

export default function NavItem({ href, children }) {
    return (
        <li><a href={href} className="text-black text-lg text-opacity-60 hover:text-opacity-100 transition font-semibold">{children}</a></li>
    );
};
