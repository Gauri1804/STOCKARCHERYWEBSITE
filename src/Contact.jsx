import React, { useState } from "react";
import styled from "styled-components";
import { db } from "./components/firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phonenumber: "",
    message: "",
    tradingExperience: "", // New field for trading experience
    city: "", // New field for city
    occupation: "", // New field for occupation
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      username: form.username.value,
      phonenumber: form.phonenumber.value,
      message: form.message.value,
      tradingExperience: form.tradingExperience.value, // Add tradingExperience field
      city: form.city.value, // Add city field
      occupation: form.occupation.value, // Add occupation field
    };

    try {
      const today = new Date().toISOString().split("T")[0];
      await addDoc(collection(db, today), formData);
      alert("Message sent successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error sending message, please try again.");
    }

    // Optionally reset the form fields after submission
    form.reset();
  };

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;
        padding: 2rem;
        background-color: ${({ theme }) => theme.colors.background};
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        height: auto;
        align-items: center;
        justify-content: center;

        input,
        textarea {
          padding: 1rem;
          border: 1px solid ${({ theme }) => theme.colors.yellow};
          border-radius: 5px;
          font-size: 2rem;
          width: 100%;
          max-width: 100%;
        }

        textarea {
          resize: vertical;
          min-height: 200px;
        }

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.3s;
          padding: 1rem;
          background-color: ${({ theme }) => theme.colors.yellow};
          color: #fff;
          border: 2px solid ${({ theme }) => theme.colors.yellow};
          font-size: 1.2rem;
          width: 100px;
          max-width: 200px;
          text-align: center;
          margin-top: 1rem;

          &:hover {
            background-color: ${({ theme }) => theme.colors.yellow};
            border: 2px solid ${({ theme }) => theme.colors.yellow};
            transform: scale(1.05);
          }
        }
      }
    }

    iframe {
      border: 0;
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>

      <div className="container">
        <div className="contact-form">
          <form onSubmit={handleSubmit} className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="Name"
              autoComplete="off"
              required
            />

            <input
              type="tel"
              name="phonenumber"
              placeholder="Phone Number"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Your message"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
