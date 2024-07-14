import {FC, memo, useCallback, useMemo, useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      /**
       * This is a good starting point to wire up your form submission logic
       * */
      console.log('Data to send: ', data);
    },
    [data],
  );

  
  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  const [state, handleSubmit] = useForm("xblrljnl");
    if (state.succeeded) {
        return <p>Thanks for contacting me, I will get back to you ASAP!</p>;
    }

  
  return (
    <form onSubmit={handleSubmit} className="grid min-h-[320px] grid-cols-1 gap-y-4">
      <input id="name" className={inputClasses} name="name" placeholder="Name" type="text" />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <input
        id="email"
        autoComplete="email"
        className={inputClasses}
        name="email"
        placeholder="Email"
        type="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        className={inputClasses}
        maxLength={250}
        name="message"
        placeholder="Message"
        rows={6}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit"
        disabled={state.submitting}>
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
