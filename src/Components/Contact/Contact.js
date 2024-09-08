import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { toast } from "react-toastify";
import PageHeader from "../Pageheader";
import "./styles.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const form = useRef();

  const handleChangeAction = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_v9otqsm", "template_0xi83iz", form.current, {
        publicKey: "rKP42LIMCYCPJG61b",
      })
      .then(
        () => {
          toast.success("Message Sent Successfully");
          setFormData({
            user_email: "",
            message: "",
            user_name: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <div className="Contact">
      <PageHeader 
        HeaderText="Contact Me"
        Icon={<BsInfoCircleFill size={30} />}
      />

      <div className="Contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="Contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(300px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="Contact__content__Form"
          >
            <div className="Contact__content__Form__ControlsWrapper">
              <div className="NameWrapper">
                <input
                  type="text"
                  className="inputName"
                  required
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChangeAction}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>

              <div className="EmailWrapper">
                <input
                  type="email"
                  name="user_email"
                  className="inputEmail"
                  value={formData.user_email}
                  required
                  onChange={handleChangeAction}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>

              <div className="DescWrapper">
                <textarea
                  rows={5}
                  cols={25}
                  type="description"
                  name="message"
                  className="inputDesc"
                  value={formData.message}
                  required
                  onChange={handleChangeAction}
                />
                <label htmlFor="desc" className="descriptionLabel">
                  description
                </label>
              </div>
            </div>
            <button type="submit" value="Send">
              Submit
            </button>
          </form>
        </Animate>
      </div>
    </div>
  );
};

export default Contact;
