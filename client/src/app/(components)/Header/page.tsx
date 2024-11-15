import React from 'react'

type HeaderProps = {
    name: string;

}

// Define the Header component with props type
const Header = ({ name }: HeaderProps) => {
  return (
    <h1 className='text-2xl font-semibold text-gray-700'>
        {name}
    </h1>
  )
}
export default Header;