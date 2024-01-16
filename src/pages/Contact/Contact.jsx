import ContactButtonContainer from "../../components/ContactButtonContainer/ContactButtonContainer";



const Contact = () => {
    return (
        <div id="contact" className="h-max flex flex-col items-center lg:mt-5">
            <h2 className="text-primary text-5xl mb-8 mt-14">Contact</h2>

            <ContactButtonContainer />

            <footer className="text-white flex justify-center items-center w-full text-center py-4 bg-secondary" >
                <p className="w-56 lg:w-full">© 2024 Rubén Programando. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Contact;