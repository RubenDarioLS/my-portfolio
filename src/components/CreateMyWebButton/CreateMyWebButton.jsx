import { motion } from 'framer-motion'

const CreateMyWebButton = () => {

    return (


        <a className=' w-full flex ' href={`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_SOME_KEY}`} rel="noopener noreferrer" target="_blank" text="I want that you create a website!
        Quiero que me crees una pagina web!">
            <motion.div className=' text-white font-bold mx-auto border rounded-full mx-auto py-2 px-6 '
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                whileHover={{
                    backgroundColor: '#00abf0',
                    transition: { duration: .5 }
                }}
            >
                <button>Create My Website</button>
            </motion.div >
        </a >



    )
}

export default CreateMyWebButton;