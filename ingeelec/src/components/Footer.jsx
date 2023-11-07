'use client';

import Link from 'next/link';
import Socials from './Socials';
import Nav from './Nav';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Footer = () => {
  return (
    <footer className='bg-accent section'>
      <div className='container mx-auto flex flex-col items-center gap-y-8'>
        <div>
          <Link href='#'>
            <h2 className='text-[24px] lg:text-[38px] font-semibold leading-tight'>ingeelec@gmail.com</h2>
            <h2 className='text-[24px] lg:text-[38px] font-semibold leading-tight'>carloscopa@gmail.com</h2>
          </Link>
        </div>
        <div>
          <Nav
            containerStyles='flex flex-col xl:flex-row justyfy-center items-center
              gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold'
            linkStyles='hover:text-primary/80 transition-all'
          />
        </div>
        <div>
          <Socials containerStyles='flex text-[24px] gap-x-8'
            iconStyles='hover:text-primay/80 transition-all justify-center'
          />
        </div>
      </div>

    </footer>
  )
}

export default Footer