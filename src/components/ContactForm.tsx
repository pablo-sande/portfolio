import { useForm, type FieldError } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import type { FormFields, FormKeys } from '../data/types'

type FormErrorMessage = {
    error?: FieldError;
}

const schema = yup.object({
    name: yup.string().required("Please enter a name"),
    email: yup.string().email("The email is not valid").required("Please enter an email"),
    subject: yup.string().required("Please enter a subject"),
    message: yup.string().required("Please drop a message!")
})
const ErrorMessage = ({error}: FormErrorMessage) => <div className="text-red-500">{error?.message}</div>

interface ContactFormProps {
    formKeys: FormKeys
}

export const ContactForm = (props: ContactFormProps) => {
    const formKeys: FormKeys = props.formKeys;
    const [statusMessage, setStatusMessage] = useState('');
    const [statusMessageClass, setStatusMessageClass] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        reset
    } = useForm<FormFields>({
        resolver: yupResolver(schema)
    });
    
    const submitForm = async (formValues: FormFields) => {
        try {
            setIsLoading(true);
            await emailjs.send(
                formKeys.serviceId, 
                formKeys.templateId, 
                formValues,  
                formKeys.publicKey
            )
            reset()
            setStatusMessage("Thanks for your message :)")
            setStatusMessageClass('text-green-400')
            setIsLoading(false);
        }
        catch {
            setStatusMessage("There was an error, please try again or reach me out at sandepenapablo@gmail.com")
            setStatusMessageClass('text-red-500')
            setIsLoading(false);
          }
    }

    return (
        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col py-8 text-black">
            {
                statusMessage && <div id="status-msg" className={`pb-2 ${statusMessageClass}`}>{statusMessage}</div>
            }
            <div className='grid grid-cols-2 gap-2'>
                <input type="text" className="bg-lightgray rounded-md focus-visible:ring-powercyan" placeholder="Name" {...register("name")}/>
                <input type="email" className="bg-lightgray rounded-md focus-visible:ring-powercyan" placeholder="E-mail" {...register("email")}/>
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
                type="text" 
                placeholder="Subject" 
                className="bg-lightgray mt-2 p-2 px-3 rounded-md focus-visible:ring-powercyan" 
                {...register("subject")}
            />

            <div className="p-2">
                {
                    errors.subject && <ErrorMessage error={errors.subject}/>
                }
            </div>

            <textarea 
                id="message" 
                cols={30} 
                rows={10}
                className="bg-lightgray rounded-md focus-visible:ring-powercyan"
                {...register("message")}
            >
            </textarea>

            <div className="p-2">
                {
                    errors.message && <ErrorMessage error={errors.message}/>
                }
            </div>

            {
                ! isLoading && (
                    <button 
                        type="submit"
                        className="text-softcyan bg-bluegray mt-2 rounded-3xl p-4 focus-visible:ring-powercyan w-auto m-auto min-w-40"
                    >
                        Send
                    </button>
                )
            }
        </form>
    )
}