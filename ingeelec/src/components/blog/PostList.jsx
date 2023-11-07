'use client';

import Link from "next/link";

import { BsArrowRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const PostList = ({ posts }) => {
    const primerosComentarios = posts.slice(0, 3);
    return (
        <div>
            <div className="flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pt-16
        xl:pb-24 border-t border-white/10">
                {
                    primerosComentarios.map((post) => {
                        //comnetarios
                        const { id, date, title, description } = post;
                        return (

                            <motion.div
                                variants={fadeIn('up', 1.3)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                className="flex-1" key={id}>
                                <div className='text-accent font-bold mb-1'>{date}</div>
                                <div className=' text-xl font-medium mb-4'>{title}</div>
                                <div className=' text-white/30 mb-6 font-light'>{description}</div>
                                <button className="btn btn-lg btn-accent">Ver todos los Comentarios</button>
                            </motion.div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default PostList