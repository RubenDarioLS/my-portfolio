import { motion } from 'framer-motion'
import './ContactMeetingButton.css'




const ContactMeetingButton = () => {
    return (
        <motion.div className='contactmeetingButtonContainer'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}>
            <a className='contactmeetingButtonLink' href="https://calendar.app.google/1UxHbeVNBSonBDQS7">Schedule a meeting</a>
        </motion.div>
    )
}

export default ContactMeetingButton;