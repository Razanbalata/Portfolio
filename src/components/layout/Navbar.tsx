"use client"
import React, { useEffect, useState } from 'react';
import {Code,Menu,X}  from 'lucide-react';
import { NAV_LINKS,PERSONAL_INFO } from '@/src/utils/constants';
import { scrollToSection, useScrollSpy } from '@/src/hooks/useScrollSpy';
function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
     const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));
   
    useEffect(() => {
     const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    },[]);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  } 


    return (
    <nav className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-lg' : 'bg-transparent'}`}
    style={{transform:"translate3d(0,0,0)"}}>
      
    <div className='max-w-[1320px] mx-auto px-5'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-4'>
          <Code className='w-6 h-6 text-primary'/>
          <button
           onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
           className='text-2xl font-bold bg-linear-to-r from-primary via-primary/50 to-primary/50 text-transparent bg-clip-text hover:opacity-80 transition-opacity duration-300'
           aria-label='home'
         >
          {PERSONAL_INFO.name.split(' ')[0]}
          </button>
        </div>

    {/* Desktop Nav */}
      
      <nav className='hidden md:flex items-center gap-8'>
        {NAV_LINKS.map(link => (
          <button
            key={link.id}
            onClick={()=>handleNavClick(link.id)}
            className={`text-black font-medium transition-all duration-300 ${activeSection === link.id ? 'text-white' : 'text-white/70 hover:text-white'}`}  
           >
            {link.label}
           </button>  
        ))}
            
      </nav>

  {/* CTA Btn */}

  <div className='hidden md:flex items-center gap-2'>
    <button
      onClick={()=>handleNavClick('contact')}
      className='px-7 py-3.5 text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300'
    >
      Hire Me
    </button>
  </div>


{/* Mobile Menu */}
    <button 
     onClick={()=>setIsMenuOpen(!isMenuOpen)}
     className='md:hidden p-2 rounded-md text-white hover:bg-white/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white' 
      aria-label='menu'
      aria-expanded={isMenuOpen}
    >
      {isMenuOpen ? <X className='w-6 h-6'/> : <Menu className='w-6 h-6'/>}
    </button>

      </div>
    </div>


   {/* Mobile Nav */}
    
    <div className={`md:hidden transition-transform duration-300 overflow-hidden ${isMenuOpen ? 'min-h-96 opacity-100' : 'min-h-0 opacity-0'}`}>
        
        <div className='px-5 py-4'>
          <nav className='flex flex-col gap-4'>
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={()=>handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === link.id ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10'}`}  
               >
                {link.label}
               </button>  
            ))}

           <button onClick={()=>handleNavClick("contact")} className='block w-full text-center px-4 py-3 rounded-lg font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300'>
             Hire Me
           </button>

          </nav>
        </div>
         
    </div>

    </nav>
  );
}

export default Navbar;
