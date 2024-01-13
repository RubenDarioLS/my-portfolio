import './HomeLogoImg.css'
import logoImg from '../../../public/logo.png'
const HomeLogoImg = () => {
    return (

        <div className='homeImgContainer'>
            <img src={logoImg} alt="logo image" className="h-72 rounded-full border-primary  hidden lg:flex homeLogo" />
        </div>

    )
}

export default HomeLogoImg;