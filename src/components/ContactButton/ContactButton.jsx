import './ContactButton.css'
const ContactForm = ({ icon, link }) => {


    return (
        <>
            <a href={link} className='contactButton text-2xl'>
                <button className=" ">
                    {icon}
                </button>
            </a>

        </>
    )
}

export default ContactForm;



