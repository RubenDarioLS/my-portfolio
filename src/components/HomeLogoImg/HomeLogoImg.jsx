import './HomeLogoImg.css'
import logoImg from '../../../public/logo.png'
const HomeLogoImg = () => {
    return (

        <div className='homeImgContainer hidden lg:flex'>
            <img src={logoImg} alt="logo image" className="border-primary hidden lg:flex homeLogo" />
        </div>

    )
}

export default HomeLogoImg;