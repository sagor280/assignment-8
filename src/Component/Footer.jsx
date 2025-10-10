import React from 'react';
import { FaTwitter, FaFacebookF, FaGlobe } from 'react-icons/fa'; 

const Footer = () => {
    return (
       
        <footer className="bg-gray-900 text-gray-300 px-6 py-5 md:px-12 border-t border-gray-800">
            
           
            <div className="flex justify-between items-center mb-4">
                
             
                <div className="text-xl font-bold tracking-wider text-white">
                    HERO.IO
                </div>

               
                <div className="flex items-center">
                    <span className="mr-4 font-semibold hidden sm:inline">Social Links</span>
                    
                   
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter" className="mx-2">
                        
                        <FaTwitter className="w-5 h-5 text-gray-300 hover:text-blue-400 transition duration-300" />
                    </a>
                    
                    
                    <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" title="Website/Other Link" className="mx-2">
                       
                        <FaGlobe className="w-5 h-5 text-gray-300 hover:text-white transition duration-300" />
                    </a>
                    
                   
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="mx-2">
                        <FaFacebookF className="w-5 h-5 text-gray-300 hover:text-blue-600 transition duration-300" />
                    </a>
                </div>
            </div>
            
           
            <hr className="border-gray-800 mb-4" />

            
            <div className="text-center text-sm">
                Copyright © 2025 - All right reserved
            </div>
        </footer>
    );
}

export default Footer;