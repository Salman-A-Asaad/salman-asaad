import React, { useRef } from "react";
import styled from "styled-components";
import { bodyColor, firstColor, Container, Header, Button } from "../Style";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import checkEmail from "../assets/function/function";
const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const form = useRef();
  const email = useRef();
  const send = async () => {
    try {
      emailjs.sendForm(
        process.env.REACT_APP_SERVICES_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      );
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    if (!checkEmail(email.current.value)) return;
    toast
      .promise(send(), {
        loading: "Sending...",
        success: <b>Message Sent!</b>,
        error: <b>Could not Send.</b>,
      })
      .then(() => {
        form.current.reset();
      });
  };
  return (
    <Container id="contact" className="py-5">
      <div style={{ overflow: "hidden" }} ref={ref} className="container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <Header>
            <h5>
              get in <span style={{ color: firstColor }}>touch</span>
            </h5>
            <h4>contact me</h4>
          </Header>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <Form ref={form} onSubmit={sendEmail}>
            <div className="row row-gap-3">
              <div className="col-lg-6">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="col-lg-6">
                <input
                  ref={email}
                  type="email"
                  name="from_email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <textarea
              name="form_message"
              placeholder="Enter your message"
              required
            ></textarea>
            <div className="d-flex align-items-center justify-content-center">
              {" "}
              <Button style={{ marginTop: "20px" }} type="submit">
                send message
              </Button>
            </div>
          </Form>
        </motion.div>
      </div>
    </Container>
  );
};

const Form = styled.form`
  width: 70%;
  margin: 20px auto;
  div {
    input {
      border-radius: 5px;
      width: 100%;
      padding: 10px;
      background-color: ${bodyColor};
      color: white;
      border: none;
      outline: none;
      &:focus {
        outline: none;
      }
    }
  }
  textarea {
    border-radius: 5px;
    margin-top: 20px;
    width: 100%;
    height: 250px;
    resize: none;
    padding: 10px;
    background-color: ${bodyColor};
    color: white;
    border: none;
    outline: none;
    &:focus {
      outline: none;
    }
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export default Contact;
