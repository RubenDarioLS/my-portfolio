import ContactButtonContainer from "../../components/ContactButtonContainer/ContactButtonContainer";



const Contact = () => {
    return (
        <>
            <section id="contact" className="h-max flex flex-col items-center lg:mt-5">
                <h2 className="text-primary text-6xl mb-8 mt-14">Contact</h2>

                <ContactButtonContainer />
            </section>

        </>
    )
}

export default Contact;