'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//COMPONENTE
import NavMobile from "./NavMobile";
import Nav from "./Nav";
import MenuBtn from "./MenuBtn";



const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detectar scroll
      setActive(window.scrollY > 100);
    };

    // agregar evento
    window.addEventListener('scroll', handleScroll);

    //limpiar evento
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },
    []
  );


  return (
    <header className={`fixed z-50 w-full transition-all
    ${active ? 'bg-[#030315] py-6 transition-all' : 'bg-transparent py-8 transition-all'}`}>

      <div className="container mx-auto flex flex-col xl:flex-row items-center 
      justify-between" >
        {/*logo */}
        <Link
          href={'#'}
          className='relative flex w-[226px] h-[37.64px] 
          transition-all mb-4 xl:mb-0'
        >
          <Image src={'/assets/header/logo.png'}
            fill
            className="object-contain"
          />
        </Link>

        {/*nav */}
        <Nav containerStyles='hidden xl:flex items-center 
        gap-x-8' />

        {/*nav mobile */}
        <NavMobile />

        {/*menu btn */}
        <MenuBtn />
        {/*redes sociales */}
        <nav>Espacio para las Redes Sociales</nav>

      </div>
    </header>
  );
};

export default Header;