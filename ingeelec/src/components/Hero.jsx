'use client';

import Image from 'next/image';

import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from 'react-parallax-mouse';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
const locationSequence = [
    'Los Angeles, USA',
    3000,
    'Rio de Janeiro, Brazil',
    3000,
    'Paris, France',
    3000,
    'Berlin, Germany',
    3000,
    'Berlin, Germany',
    -3000,
]
const Hero = () => {
    return <section className='h-[80vh]  xl:h-[850px]' id='home'>
        <div className='container mx-auto h-full flex justify-center items-center
        xl:justify-start'>
            {/*text */}
            <div>text</div>
            {/*imagne*/}
            <div className='hidden xl:flex absolute right-0 top-0 before:w-[748px]
            before:h-[893px] before:absolute before:right-0 before:top-0 
            before:bg-singerOverlay before:z-10'>
                <Image src={'/assets/hero/singer.png'} 
                width={617}
                height={893} 
                alt='' 
                quality={100} 
                priority
                />
            </div>
        </div>
    </section>
};
export default Hero;