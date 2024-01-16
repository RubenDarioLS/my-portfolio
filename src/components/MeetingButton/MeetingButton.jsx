import { motion } from 'framer-motion'
import './MeetingButton.css'

const MeetingButton = () => {
    return (
        <motion.div className='meetingButtonContainer'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}>
            <a className='meetingButtonLink' href="https://calendar.app.google/1UxHbeVNBSonBDQS7">Schedule a meeting</a>
        </motion.div>
    )
}

export default MeetingButton;