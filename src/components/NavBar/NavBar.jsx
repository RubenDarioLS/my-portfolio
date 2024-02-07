import React from 'react'
import logoImg from '../../assets/logo.svg'
import { motion } from "framer-motion"

const NavBar = () => {

    const navButtons = [
        {
            id: 1, name: 'Home', link: '#home'
        },
        {
            id: 2, name: 'About', link: '#about'
        },
        {
            id: 3, name: 'Projects', link: '#projects'
        },
        {
            id: 4, name: 'Skills', link: '#skills'
        },
        {
            id: 5, name: 'Contact', link: '#contact'
        },
    ]

    return (
        <>
            <header className=" hidden lg:flex lg:fixed lg:w-full lg:z-10 lg:bg-bgColor">

                <nav className="flex flex-row justify-between items-center w-full">

                    <motion.img src={logoImg} alt="logo img"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-10 rounded-lg ml-7 border-2 border-primary flex" />

                    <ul className="text-center flex h-full bg-bgColor mr-16 ">

                        {navButtons.map((button) =>
                            <motion.div key={button.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}>
                                <a href={button.link}><li className="text-white text-md py-4 w-full px-4 hover:scale-110 ">{button.name}</li></a>
                            </motion.div>
                        )}

                    </ul>
                </nav>

            </header>

        </>
    )
}

export default NavBar;