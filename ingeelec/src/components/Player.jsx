'use client';

import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";


const Player = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-tertiary/70'>
                <div className='container mx-auto flex flex-col justify-between items-center xl:flex-row'>
                    { /*texto & avatar img */}
                    <div className="hidden w-[300px] xl:flex items-center gap-x-4">
                        {/*imagen logo avatar */}
                        <div className="relative w-16 h-16">
                            <Image
                                src={'/assets/player/avatar.png'}
                                fill
                                alt=""
                                priority
                            />
                        </div>
                        {/*text */}
                        <div className="leading_none">
                            <div className="text-lg font-medium">Mia Reynolds</div>
                            <div className="text-sm font-light">Freedom</div>
                        </div>
                    </div>
                    { /*reproductor */}
                    <div className="w-full max-w-4xl">
                        <AudioPlayer
                            loop
                            preload='none'
                            color='#333'
                            volume={40}
                            volumePlacement="top"
                            src="/assets/freedom.mp3"
                            style={{
                                background: 'transparent',
                                boxShadow: 'none',
                                width: '100%',
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Player