import { useState } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='bg-[#141414] border-b border-line font-inter w-full h-16 sm:h-20 md:h-18 text-white text-lg'>
      <div className='relative flex items-center justify-between w-full h-full px-4'>
        <div className='h-full flex items-center ml-12'>
          Animesh
        </div>

        <div className='hidden md:flex h-full justify-center items-center space-x-4'>
          <a href="/letter/" className="text-[#9DA3A1] hover:text-[#ffffff] px-3 py-2 rounded-md">Newsletter</a>
          <a href="/about" className="text-[#9DA3A1] hover:text-[#ffffff] px-3 py-2 rounded-md">About</a>
          <a href="/products" className="text-[#9DA3A1] hover:text-[#ffffff] px-3 py-2 rounded-md">Products</a>
          <a href="/contact" className="text-[#9DA3A1] hover:text-[#ffffff] px-3 py-2 rounded-md">Contact</a>
        </div>

        <div className='h-full flex items-center space-x-4 mr-12'>
          <button className='h-[24] w-[24] md:hidden' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
          </button>
          <button className='h-[24] w-[24]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className='absolute top-16 left-0 w-full bg-[#141414] flex flex-col items-center space-y-4 py-4 md:hidden'>
            <a href="/letter/" className="text-[#9DA3A1] hover:text-[#ffffff] px-3 py-2 rounded-md">Newsletter</a>
            <a href="/about" className="text-[#9DA3A1] hover:text-[#ffffff] px-3 py-2 rounded-md">About</a>
            <a href="/services" className="text-[#9DA3A1] hover:text-[#ffffff] px-3 py-2 rounded-md">Products</a>
            <a href="/contact" className="text-[#9DA3A1] hover:text-[#ffffff] px-3 py-2 rounded-md">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
