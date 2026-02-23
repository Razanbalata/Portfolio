"use client";
import { useEffect,useState } from "react";
export const useScrollSpy = (sectionIds: string[],offset=100) => {
   const [activeSection, setActiveSection] = useState<string | null>(null);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]); 

                if(section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sectionIds[i]);
                        break;
                    }
                }
            }
        };
        handleScroll(); // Check on mount
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds,offset]);

    return activeSection;
} 


// Smooth scroll function
export const scrollToSection = (id: string,offset=100) => {
   const section = document.getElementById(id);
   if(section) {
    const top = section.offsetTop - offset;
    window.scrollTo({top, behavior: 'smooth'});
   }

}