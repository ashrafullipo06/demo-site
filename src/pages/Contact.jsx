import { useState } from "react";
import EmailIcon from "../assets/email-icon.gif";
import HomeIcon from "../assets/Home-icon.gif";
import TelephoneIcon from "../assets/telephone-icon.gif";

const Contact = () => {
    const [ formData, setFormData] = useState({
        name: "",
        email: "",
        message:"",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div className="flex">
      <div className="flex flex-col h-[460px] w-[375px] justify-start items-start">
        <div>
          <h2 className="font-semibold text-[58px]">Contact Us</h2>
          <p>
            We are committed to processing the information in order to contact
            you and talk about your project.{" "}
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <img className="w-[22px] h-[22px] " src={EmailIcon} alt="" />
            <p className="text-[20px]">ashrafullipo@gmail.com</p>
          </div>
          <div className="flex items-center">
            <img className="w-[22px] h-[22px]" src={HomeIcon} alt="" />
            <p className="text-[20px]">Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center">
            <img className="w-[22px] h-[22px]" src={TelephoneIcon} alt="" />
            <p className="text-[20px]">+88 016 1911 2376</p>
          </div>
        </div>
      </div>

{/* form start here */}

<form className="flex flex-col " onSubmit={handleSubmit}>
  {/* Name */}
  <div>
    <label>Name</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your name"
      required
    />
  </div>

  {/* Email */}
  <div>
    <label>Email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
      required
    />
  </div>

  {/* Message */}
  <div className="flex">
    <label>Message</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Write your message"
      required
    ></textarea>
  </div>

  <button className="bg-slate-600 cursor-pointer" type="submit">Send Message</button>
</form>


{/* form end here */}

      
    </div>
  );
};

export default Contact;
