import { useForm } from 'react-hook-form'

type Fields = {
    name: string,
    email: string,
    subject: string,
    message: string,
}
export const ContactForm = () => {
    const { register, handleSubmit } = useForm<Fields>();
    const onSubmitForm = (fields) => {

    }

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col py-8 text-black">
            <div>
                <input type="text" className="mr-4" placeholder="Name" {...register("name")}/>
                <input type="email" placeholder="E-mail" {...register("email")}/>
            </div>

            <input type="subject" placeholder="Subject" className="my-4 p-2" {...register("subject")}/>

            <textarea 
                name="Form Content" 
                id="form-content" 
                cols={30} 
                rows={10}
                className="">
            </textarea>
            <button type="submit" className="text-white mt-8 rounded-3xl p-4">Submit</button>
        </form>
    )
}