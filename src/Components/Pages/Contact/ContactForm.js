import React, {useState} from "react";
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const templateId = 'template_uYtm4ibB';
  const sendMail = () => {
    setLoading(true);
    window.emailjs.send(
      'gmail', templateId,
      {
        message_html: message,
        from_name: name,
        to_name: 'Chariss',
        reply_to: email
      }
    ).then(() => {
        setLoading(false);
        setIsSent(true);
        setTimeout(() => window.location = '/' ,3000);
    })
      .catch((er) => {
        setLoading(false);
        setIsError(true);
        setTimeout(() => setIsError(false) ,5000);
      })
  };
  return (
    <div className="col-12 col-lg-7">
      <form className="contact-form" id="contact-form">
        {isSent && <p className="text-center msg-sent">I have received your message, I will get back to you</p>}
        {isError && <p className="text-center msg-error">Your message was not sent, try again</p>}
        <h4 className="content-title">Message Me</h4>
        <div className="row">
          <div className="col-12 col-md-6 form-group">
            <input
              className="form-control"
              id="contact-name"
              type="text"
              name="name"
              onChange={event => setName(event.target.value)}
              placeholder="Name"
              required="" />
            </div>
          <div className="col-12 col-md-6 form-group">
            <input
              className="form-control"
              id="contact-email"
              type="email"
              name="email"
              onChange={event => setEmail(event.target.value)}
              placeholder="Email"
              required=""/>
          </div>
          <div className="col-12 form-group form-message">
            <textarea
              className="form-control"
              id="contact-message"
              onChange={event => setMessage(event.target.value)}
              name="message" placeholder="Message" rows="5"
              required="">
            </textarea>
          </div>
          <div className="col-12 form-submit">
            <button
              className="btn button-main button-scheme"
              id="contact-submit"
              onClick={() => sendMail()}
              type="button"
              disabled={(!name || !message || !email) || loading}
            >
              {loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/>}
              {loading && <span>Sending</span>}
              {!loading && <span>Send Message</span>}
            </button>
            <p className="contact-feedback"/>
          </div>
        </div>
      </form>
    </div>
  )
};
export  default ContactForm;
