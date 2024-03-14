import type { ReactNode } from 'react'
import { useForm, type FieldError } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import emailjs from '@emailjs/browser'

type Fields = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

type ErrorMessage = {
    error?: FieldError;
}

const schema = yup.object({
    name: yup.string().required("Please enter a name"),
    email: yup.string().email("The email is not valid").required("Please enter an email"),
    subject: yup.string().required("Please enter a subject"),
    message: yup.string().optional()
})

const ErrorMessage = ({error}: ErrorMessage) => <div className="text-red-500">{error?.message}</div>

export const ContactForm = (sendEmail: any) => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<Fields>({
        resolver: yupResolver(schema)
    });

    const onSubmitForm = (fields: Fields) => {
        sendEmail(fields)
    }

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col py-8 text-black">
            <div className='grid grid-cols-2 gap-2'>
                <input type="text" className="bg-lightgray rounded-md" placeholder="Name" {...register("name")}/>
                <input type="email" className="bg-lightgray rounded-md" placeholder="E-mail" {...register("email")}/>
                <div className="px-2">
                    {
                        errors.name && <ErrorMessage error={errors.name}/>
                    }
                </div>
                <div className="px-2">
                    {
                        errors.email && <ErrorMessage error={errors.email}/>
                    }
                </div>
            </div>

            <input 
                type="subject" 
                placeholder="Subject" 
                className="bg-lightgray mt-2 p-2 px-3 rounded-md" {...register("subject")}
            />

            <div className="p-2">
                {
                    errors.subject && <ErrorMessage error={errors.subject}/>
                }
            </div>

            <textarea 
                name="message"
                required 
                id="form-content" 
                cols={30} 
                rows={10}
                className="bg-lightgray rounded-md"
            >
            </textarea>

            <div className="p-2">
                {
                    errors.message && <ErrorMessage error={errors.message}/>
                }
            </div>

            <button 
                type="submit"
                className="text-black bg-lightgray mt-2 rounded-3xl p-4 focus:ring-2 focus:ring-blue-400 active:ring-2 active:ring-blue-400"
                onClick={handleSubmit(onSubmitForm)}
            >
                Submit
            </button>
        </form>
    )
}