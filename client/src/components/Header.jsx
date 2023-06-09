import { useState } from 'react';
import { FaSun, FaMoon, FaGithub } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    
    <header className="flex items-center justify-end p-4">
      <nav className=" lg:block">
        <ul className="flex space-x-4 text-cyan-400 text-xl font-semibold">
          <li className='hover:text-red-500 hover:border-b-4 hover:border-solid hover:border-yellow-400 hover:scale-110'><a href="/about" >About</a></li>
          <li className='hover:text-red-500 hover:border-b-4 hover:border-solid hover:border-yellow-400 hover:scale-110'><a href="/projects" >Projects</a></li>
          <li className='hover:text-red-500 hover:border-b-4 hover:border-solid hover:border-yellow-400 hover:scale-110'><a href="/resume" >Resume</a></li>
        </ul>
      </nav>
      
    </header>
  );
};

export default Header;
