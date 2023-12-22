// Copyright (c) 2023, React Simple Typewriter
import { Typewriter } from 'react-simple-typewriter'

import { motion } from 'framer-motion'

const titleNames = ['Web Developer', 'Front-end Developer', 'Portfolio Developer', 'Freelancer']

const HomeTitle = () => {
    return (
        <div className=' flex flex-col  text-5xl z-0 mb-5 h-56' >
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }} className='text-white w-max mx-auto'>I´m{' '}</motion.h2>

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className='text-primary text-center max-w-sm mx-auto my-4 leading-snug'><Typewriter
                    words={titleNames}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    cursorColor='#00abf0'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={3000} />
            </motion.h1>
        </div>
    )
}

export default HomeTitle;

/*  Copyright (c) 2021-present awran5

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/