import img from '../../assets/logo.svg'
import React from 'react'

const LogoImg = () => {
    return (
        <>
            <div className='w-full items-center flex justify-center'>

                <img src={img} alt="logo" className='rounded-full h-32 border-2 border-primary ' />
            </div>
        </>
    )
}

export default LogoImg;