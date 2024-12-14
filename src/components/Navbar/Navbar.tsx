import React from 'react';
import { Code2 } from 'lucide-react';
import NavLink from '../NavLink';
import { navigationLinks } from './config';

const Navbar = () => {
  return (
    <nav className="py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="w-8 h-8 text-purple-400" />
          <span className="font-bold text-xl">Paul Certified</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;