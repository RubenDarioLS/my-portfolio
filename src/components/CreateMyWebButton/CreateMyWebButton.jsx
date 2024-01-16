import { motion } from 'framer-motion'

const CreateMyWebButton = () => {

    const whatsappNumber = import.meta.env.WHATSAPP_NUMBER;


    return (


        <a className=' w-full flex lg:w-max' href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`} rel="noopener noreferrer" target="_blank" text="I want that you create a website!
        Quiero que me crees una pagina web!">
            <motion.div className=' text-white font-bold mx-auto border rounded-full py-2 px-3 lg:mx-0 lg:text-sm '
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                whileHover={{
                    backgroundColor: '#00abf0',
                    transition: { duration: .5 }
                }}
            >
                <button>Create my website</button>
            </motion.div >
        </a >



    )
}

export default CreateMyWebButton;