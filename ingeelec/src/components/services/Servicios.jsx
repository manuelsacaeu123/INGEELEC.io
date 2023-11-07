'use client';

import ServiciosSlider from "./ServiciosSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import SectionHeader from "../SectionHeader";


const Servicios = () => {
  return (
    <section id="servicios">
        <div className="container mx-auto">
            <SectionHeader  pretitle='Servicios' title='Conozca nuestros servicios'/>
            {/*servicios slider */}
            <div>
                <ServiciosSlider/>
            </div>
        </div>

    </section>
  )
}

export default Servicios