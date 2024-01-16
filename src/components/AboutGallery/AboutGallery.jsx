import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const palabras = ['Respect', 'Compromise', 'Responsability', 'Teamwork'];

const AboutGallery = () => {
    const [rotacion, setRotacion] = useState(0);
    const [indicePalabra, setIndicePalabra] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotacion((prevRotacion) => prevRotacion + 180);
            setIndicePalabra((prevIndice) => (prevIndice + 1) % palabras.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <motion.div
            className='w-72 h-72 bg-primary rounded-lg justify-center items-center text-2xl font-bold text-white hidden lg:flex'


            animate={{
                rotateZ: rotacion,
                rotateY: rotacion,
                rotateX: rotacion,
            }}
        >
            {palabras[indicePalabra]}
        </motion.div>
    );
};


export default AboutGallery;