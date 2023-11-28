import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  const getPageTitle = () => {
    switch (currentPage) {
      case '/':
        return 'Vista general';
      case '/trabajadores':
        return 'Trabajadores';
      case '/inventario':
        return 'Inventario';
      case '/dashboard':
        return 'Panel de información';
      case '/estimaciones':
        return 'Estimaciones';
      default:
        return 'Page Title';
    }
  };

  return (
    <nav className="bg-color-cafe-oscuro text-color-crema p-4 fixed w-full top-0 z-50 shadow-navbarShadow text-center">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4x2 font-bold mb-1 md:mb-1">
          {getPageTitle()}
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
