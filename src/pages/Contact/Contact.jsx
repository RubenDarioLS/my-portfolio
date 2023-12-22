import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
    return (
        <div id="contact" className="h-full flex flex-col items-center">
            <h2 className="text-primary text-5xl mb-8 mt-14">Contact</h2>
            <ContactForm />
        </div>
    )
}

export default Contact;