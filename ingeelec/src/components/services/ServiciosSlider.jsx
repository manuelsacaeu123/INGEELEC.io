'use client'

import { use, useState } from "react";
import useSWR from "swr";
import Image from "next/image";

import { AudioPlayer } from "react-audio-play";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

//url
const fetcher = (url) => fetch(url).then((res) => res.json());


const ServiciosSlider = () => {
    const { data, error } = useSWR('http://localhost:4010/albums', fetcher);
    console.log(data);
    if (error) return 'ERROOR';
    if (!data) return 'Espera...';

    return (
        <>
            {/*top slider */}
            <Swiper>
                {data.map((album) => {
                    return (
                        <SwiperSlide key={album.id} className="mb-12">
                            <div className='w-fuIl bg-secondary/80 rounded-[l0px] flex flex-col
                        xl:flex-row items-center p-6 xl:p-12 gap-x-12'>
                                {/*imagen*/}
                                <div className=' hidden xl:flex w-[300px] h-[300px] xl:h-
                        [500px] relative cursor-pointer rounded-[10px] overflow-hidden'>
                                    <Image
                                        src={album.img}
                                        fill
                                        priority
                                        alt=""
                                        className="object-contain"
                                    />
                                </div>
                                {/*track container */}
                                <div className='flex flex-1 w-full h-[300px]'>
                                    <div className="flex-1 flex flex-col xl:px-12">
                                        {album.tracks?.map((track, index) => {
                                            return (
                                                <div key={index}>
                                                    <ul>
                                                        <li>
                                                            <div>{track.name}</div><br />
                                                        </li>
                                                    </ul>
                                                    
                                                </div> 
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
            {/*thumb slider */}
            <Swiper>

            </Swiper>
        </>
    )
}

export default ServiciosSlider