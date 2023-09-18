"use client";

// Don't need schema as this is a client side component using formspree
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(`${process.env.FORMSPREE_ID}`);
  if (state.succeeded) {
    return (
      <p className="font-bold">
        Thank you for your enquiry, I will get back to you as soon as possible!
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto w-[300px] 800:w-[400px]"
    >
      <label htmlFor="name" className="block mb-2 font-semibold text-white">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="John Doe"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <label htmlFor="email" className="block mb-2 font-semibold text-white">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="abc@example.com"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <label htmlFor="subject" className="block mb-2 font-semibold text-white">
        Subject
      </label>
      <input
        id="subject"
        type="text"
        name="subject"
        placeholder="e.g. Job Opportunity, Consultation"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <ValidationError prefix="Subject" field="subject" errors={state.errors} />
      <label htmlFor="message" className="block mb-2 font-semibold text-white">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder=""
        className="w-full h-32 px-4 py-2 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        id="button-primary"
        type="submit"
        disabled={state.submitting}
        className="w-full animate-slideLeftT4 px-[20px] py-[7px] text-white cursor-pointer hover:scale-105 active:scale-90  transition-all duration-150 select-none rounded-[5px]"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
