"use client"

import Navbar from "@/app/(components)/Navbar";
import Sidebar from "./(components)/Sidebar";
import React, { useEffect } from "react";
import StoreProvider, { useAppSelector } from "@/app/redux";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  // Setting the global state to check for the collapsed sidebar layout
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSideBarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  // used to make the changes to the state 
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.add("light");
    }
  });


  // Toggle the dark mode on click
  return (
    <div className={` ${isDarkMode ? "dark": "light"} flex light min-h-screen text-gray-900 w-full bg-gray-50 `}>

      <Sidebar />
      <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}>
        <Navbar />
        {children}
      </main>
    </div>
  )
}
const DashboardWrapper = ({children} : {children: React.ReactNode}) => {
  return (
    <StoreProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper;