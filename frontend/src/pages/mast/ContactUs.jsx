import { CgMail } from "react-icons/cg";
import { FaPhone} from "react-icons/fa6";
const ContactUsForm = () => {
  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <div className="d-flex justify-content-around ">
        <div className="contact-left">
        <div className="contact-icon m-3">
            <CgMail />
            <p className="m-2">demo@gmail.com</p>
          </div>
          <div className="contact-icon m-3">
            <FaPhone />
            <p className="m-2">6201041680</p>
          </div>

        </div>
        <form className="contact-right">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
