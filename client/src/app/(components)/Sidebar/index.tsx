'use client'

import { setIsSidebarCollapsed } from '@/app/state';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, SlidersHorizontal, User } from 'lucide-react';
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;  // true for collapsed sidebar, false for expanded sidebar
};


// Component that handles links in the sidebar -> Inventory, Dashboard etc...
const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  // this grabs the path of the URL we're at currently.
  const pathName = usePathname();
  // this checks if the current URL matches the href prop of the SidebarLink component -> bacially tells what page we are on right now.
  const isActive = pathName === href || (pathName === '/' && href === '/dashboard');

  return (
    <Link href={href}>
      <div className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-4": "justify-start px-8 py-4 "} 
        hover:text-blue-500 gap-3 transition-colors
        ${isActive ? "bg-blue-200 text-white": ""}
      `}>
        <Icon className="w-6 h-6 !text-gray-700" />
        <span className={`${isCollapsed ? "hidden": "block"} font-medium text-gray-700`}>
          {label}
        </span>
      </div>
    </Link>
  );
};


const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector((state) => state.global.isSideBarCollapsed);

  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapsed(!isSideBarCollapsed)); //close the sidebar
  };

  const sideBarClassNames = `fixed flex flex-col ${
    isSideBarCollapsed ? "w-0 md:w-16": "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40` 

  return (
    <div className={sideBarClassNames}>
      {/* TOP LOGO */}
        <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSideBarCollapsed ? "px-5 ": "px-8"}`}>
            <div>LOGO</div>
            {isSideBarCollapsed ? "" : <h1 className='font-extrabold text-2xl'>
                STOCKIT
            </h1>}
            
        <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSideBar}>
            <Menu className='h-4 w-4'/>
        </button>
      </div>

      {/* LINKS */}
      <div className='flex-grow mt-8'>
        <SidebarLink href='/dashboard' icon={Layout} label='Dashboard' isCollapsed={isSideBarCollapsed} />
        <SidebarLink href='/inventory' icon={Archive} label='Inventory' isCollapsed={isSideBarCollapsed} />
        <SidebarLink href='/products' icon={Clipboard} label='Products' isCollapsed={isSideBarCollapsed} />
        <SidebarLink href='/users' icon={User} label='User' isCollapsed={isSideBarCollapsed} />
        <SidebarLink href='/settings' icon={SlidersHorizontal} label='Settings' isCollapsed={isSideBarCollapsed} />
        <SidebarLink href='/expenses' icon={CircleDollarSign} label='Expenses' isCollapsed={isSideBarCollapsed} />
      </div>

      {/* FOOTER */}
      <div>
        <p className='text-center text-md text-gray-500'>
          &copy; 2021 StockIT. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Sidebar;