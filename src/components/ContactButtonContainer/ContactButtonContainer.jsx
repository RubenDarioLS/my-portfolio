import ContactButton from '../ContactButton/ContactButton'
import MeetingButton from '../../components/MeetingButton/MeetingButton'
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaTiktok } from "react-icons/fa6";



const ContactButtonContainer = () => {

    const tiktokLink = import.meta.env.TIKTOK_URL;
    const whatsAppNumber = import.meta.env.WHATSAPP_NUMBER;
    const githubLink = import.meta.env.GITHUB_URL;


    return (
        <div className='flex flex-col justify-center items-center my-3 h-max'>

            <ContactButton icon={<FaWhatsapp />} link={`https://api.whatsapp.com/send?phone=${whatsAppNumber}`} />
            <ContactButton icon={<FaTiktok />} link={tiktokLink} />
            <ContactButton icon={<FaGithub />} link={githubLink} />
            <div className='mt-10  mb-24'>
                <MeetingButton />
            </div>
        </div>
    )
}

export default ContactButtonContainer;