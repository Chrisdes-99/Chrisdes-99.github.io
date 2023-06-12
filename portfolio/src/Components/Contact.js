import '../styles/Contact.css'
import git from '../images/Git.png'
import linked from '../images/linked.png'
import discord from '../images/discord.png'

import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className='Contact'>
        <h1>Contact</h1>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
    <div className='input-Grid'>    

     <div className='info'>
        <h3><u>Contact Information</u></h3>
        <p>Phone: 951-292-8336</p>
        <p>Email: christopherdesantiago21@gmail.com</p>
        <div className='icon-grid'>
            <div>
            <img src={git} alt="GitHub" width={30} height={30}></img>
            </div>
            <div>
            <img src={linked} alt="GitHub" width={30} height={30}></img>
            </div>
            <div>
            <img src={discord} alt="GitHub" width={30} height={30}></img>
            </div>
        </div>
     </div>

     <div>
        <p style={{color:'white'}}>or</p>
     </div>

    <div className='input'>
       <h3>Message Me</h3> 
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your Name *"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>

      <br></br>

      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email *"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>

      <br></br>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your Message *"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>

      <br></br>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
     </div>

    </div>

    </form>
    </div>
  );
};

export default ContactForm;