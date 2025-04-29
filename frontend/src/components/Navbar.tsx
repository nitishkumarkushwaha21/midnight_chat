
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger icons


function Navbar() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <div className="bg-black text-white px-3 py-3">
      <div className="container md:mx-150  ">
      
      
     

        {/* Desktop Nav Links */}
        <div className=" md:flex space-x-6 items-center justify-between ">
          <Link to="/"  className="hover:bg-slate-700 rounded px-4 py-1  text-4xl animate-pulse "
          style={{fontFamily:" Tagesschrift"}}>Midnight Chats</Link>
         
      
    
      
       
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 px-4 space-y-2">
          <Link to="/" className="block hover:bg-slate-700 rounded px-4 py-2">Home</Link>
        
        
          
          <Link to="/login" className="block hover:bg-slate-700 rounded px-4 py-2">Login</Link>
          <Link to="/register" className="block hover:bg-slate-700 rounded px-4 py-2">Register</Link>
         
        </div>
      )}
    </div>
  );
}

export default Navbar;
