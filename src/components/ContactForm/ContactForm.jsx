import { useForm } from 'react-hook-form'

const ContactForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className='lg:w-full lg:px-40'>
            <form onSubmit={handleSubmit((data) => { console.log(data) })} className='flex flex-col'>


                <input className='bg-transparent  mt-12 border-b text-xl text-white  focus:outline-none  border-primary ' type="text" {...register("firstName",
                    {
                        required: { value: true, message: "This field is required." },
                        minLength: { value: 3, message: "The name must have a minimum of 3 characters." },
                        maxLength: { value: 20, message: "The name must have a maximum of 20 characters." },
                        pattern: { value: /^[A-Za-z\u00B4]+|[A-Za-z]+\u00B4[A-Za-z]+$/, message: "Invalid character." }
                    })} placeholder='Name' />
                <p className='text-red-700 text-sm'>{errors.firstName?.message}</p>

                <input className='bg-transparent  mt-12 border-b text-xl text-white focus:outline-none  border-primary' type="email" {...register("email",
                    {
                        required: { value: true, message: "This field is required." },
                        minLength: { value: 3, message: "The email must have a minimum of 3 characters." },
                        maxLength: { value: 35, message: "The email must have a maximum of 35 characters." },
                        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,6}$/, message: "Invalid character." }
                    })} placeholder='Email' />
                <p className='text-red-700 text-sm'>{errors.email?.message}</p>

                <textarea className='bg-transparent  mt-12 border-b text-xl text-white resize-none focus:outline-none  border-primary h-16 overflow-hidden' {...register("message",
                    {
                        required: { value: true, message: "This field is required." },
                        minLength: { value: 3, message: "The message must have a minimum of 3 characters." },
                        maxLength: { value: 200, message: "The message must have a maximum of 200 characters." },
                        pattern: { value: /^[a-zA-Z0-9\s.,¡!?¿()"\u00C0-\u00FF]+$/, message: "Invalid character." }
                    })} placeholder='Message' />
                <p className='text-red-700 text-sm'>{errors.message?.message}</p>


                <input type="submit" className='bg-primary mt-12 text-white rounded hover:bg-sky-400  cursor-pointer' />
            </form>

        </div>
    )
}

export default ContactForm 



