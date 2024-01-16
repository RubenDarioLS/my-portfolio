import ContactButton from '../ContactButton/ContactButton'
import ContactMeetingButton from '../../components/ContactMeetingButton/ContactMeetingButton'
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const ContactButtonContainer = () => {

    const linkedinLink = import.meta.env.ENV_LINKEDIN_URL;
    const whatsAppNumber = import.meta.env.ENV_WHATSAPP_NUMBER;
    const githubLink = import.meta.env.ENV_GITHUB_URL;


    return (
        <div className='flex flex-col justify-center items-center my-3 h-full lg:flex-row lg:w-3/6 lg:justify-between lg:mb-20 lg:mt-8'>

            <div className='lg:w-3/6 lg:justify-between lg:items-between lg:flex lg:flex-col'>

                <ContactButton icon={<FaWhatsapp />} link={`https://api.whatsapp.com/send?phone=${whatsAppNumber}`} />
                <ContactButton icon={<FaLinkedin />} link={linkedinLink} />
                <ContactButton icon={<FaGithub />} link={githubLink} />
            </div>
            <div className='mt-10  mb-24 lg:mt-0 lg:mb-0 '>
                <ContactMeetingButton />
            </div>
        </div>
    )
}

export default ContactButtonContainer;