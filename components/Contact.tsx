import type { NextPage } from "next";
import { useState } from "react";

const Contact: NextPage = () => {
  const [senderEmail, setSenderEmail] = useState<string>("");
  const [senderName, setSenderName] = useState<string>("");
  const [senderMessage, setSenderMessage] = useState<string>("");

  return (
    <section id='Contact' className='container'>
      <h1 className='page-title'>Let's get in touch!</h1>
      <p className='page-subtitle'>
        You can use the form below, or directly send me an email at &lt;&lt;
        <a href='mailto:nachomartindev@gmail.com'>nachomartindev@gmail.com</a>
        &gt;&gt; , and I will responde as soon as possible.
      </p>

      <form className='contact__form-container'>
        <div className='contact__form-fieldset'>
          <div className='contact__form-field'>
            <label htmlFor=''>Name</label>
            <input
              id='name'
              name='name'
              maxLength={100}
              onKeyDown={e => {
                console.log(e);
              }}
            />
          </div>
          <div className='contact__form-field'>
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' maxLength={100} />
          </div>
        </div>
        <div className='contact__form-fieldset'>
          <div className='contact__form-field'>
            <label htmlFor='message'>Write a message</label>
            <textarea id='message' name='message' maxLength={300}></textarea>
          </div>
        </div>
        <div className='contact__form-fieldset'>
          <div className='contact__form-field'>
            <button type='submit'>Send message</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
