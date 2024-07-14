import {useForm, ValidationError} from '@formspree/react';
import {FC, memo} from 'react';

const ContactForm: FC = memo(() => {
  
  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  const [state, handleSubmit] = useForm("xblrljnl");
    if (state.succeeded) {
        return <p>Thanks for contacting me, I will get back to you ASAP!</p>;
    }

  
  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" onSubmit={handleSubmit}>
      <input className={inputClasses} id="name" name="name" placeholder="Name" type="text" />
      <ValidationError 
        errors={state.errors} 
        field="name"
        prefix="Name"
      />
      <input
        autoComplete="email"
        className={inputClasses}
        id="email"
        name="email"
        placeholder="Email"
        type="email"
      />
      <ValidationError 
        errors={state.errors} 
        field="email"
        prefix="Email"
      />
      <textarea
        className={inputClasses}
        id="message"
        maxLength={250}
        name="message"
        placeholder="Message"
        rows={6}
      />
      <ValidationError 
        errors={state.errors} 
        field="message"
        prefix="Message"
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        disabled={state.submitting}
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
