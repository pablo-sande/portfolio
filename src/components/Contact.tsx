import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  const form = useRef<HTMLFormElement>();

  const sendEmail = (email: any) => {
    email.preventDefault();

    emailjs
      .sendForm('service_smkbyy8', 'template_qklnvjk', form.current || "", {
        publicKey: 'BJ70TUah7Mk4z3PMg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return <ContactForm sendEmail={sendEmail}></ContactForm>
};