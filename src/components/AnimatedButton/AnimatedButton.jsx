import './AnimatedButton.css'
const AnimatedButton = ({ text, link }) => {
    return (
        <div className='buttonContainer'>
            <a className='buttonLink' href={link}>{text}</a>
        </div>
    )
}

export default AnimatedButton;