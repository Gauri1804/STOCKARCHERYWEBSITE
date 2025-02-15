import React, { useState } from "react";
import styled from "styled-components";
import { db, collection, doc, setDoc } from "./firebase"; // Firebase import

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    experience: "",
    budget: "",
    startTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split("T")[0];

    try {
      const enquiryRef = doc(collection(db, `enquiry/${today}/submissions`));
      await setDoc(enquiryRef, formData);
      alert("Enquiry submitted successfully!");
      setFormData({
        name: "",
        email: "",
        city: "",
        phone: "",
        experience: "",
        budget: "",
        startTime: "",
      });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Failed to submit enquiry.");
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <LeftSection>
          <h1 className="title">
            <span className="highlight">
              Stock <span className="highlight2">Archery</span>
            </span>
          </h1>
          <p className="description">
          Partner with us to revolutionize financial education in your city and make a lasting impact. This is your chance to be part of a lucrative and meaningful business opportunity that empowers individuals with essential financial knowledge. Take the first step toward success today!
          </p>
          <ApplyButton>Apply Now →</ApplyButton>
        </LeftSection>

        <RightSection>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <label htmlFor="name">Full Name *</label>
              <input name="name" type="text" placeholder="Enter your name" required value={formData.name} onChange={handleChange} />
            </InputGroup>

            <Row>
              <InputGroup>
                <label htmlFor="email">Email *</label>
                <input name="email" type="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
              </InputGroup>
              <InputGroup>
                <label htmlFor="city">City *</label>
                <input name="city" type="text" placeholder="Enter your city" required value={formData.city} onChange={handleChange} />
              </InputGroup>
            </Row>

            <InputGroup>
              <label htmlFor="phone">Phone Number *</label>
              <input name="phone" type="tel" placeholder="Enter your phone number" required value={formData.phone} onChange={handleChange} />
            </InputGroup>

            <InputGroup>
              <label>What is your business experience? *</label>
              <select name="experience" required value={formData.experience} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </InputGroup>

            <InputGroup>
              <label>What is your investment budget? *</label>
              <select name="budget" required value={formData.budget} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="Less than ₹1,00,000">Less than ₹1,00,000</option>
                <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                <option value="More than ₹5,00,000">More than ₹5,00,000</option>
              </select>
            </InputGroup>

            <InputGroup>
              <label>How soon are you planning to start? *</label>
              <select name="startTime" required value={formData.startTime} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="Immediately">Immediately</option>
                <option value="Within 3 months">Within 3 months</option>
                <option value="More than 6 months">More than 6 months</option>
              </select>
            </InputGroup>

            <SubmitButton type="submit">Send →</SubmitButton>
          </Form>
        </RightSection>
      </ContentWrapper>

      {/* Video Section */}
      <VideoSection>
        <VideoWrapper>
          <Video autoPlay loop controls>
            <source src="/pro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </VideoWrapper>

        <VideoTextWrapper>
          <h2 className="video-title">Why Choose Our Franchise?</h2>
          <p className="video-description">
            Become a part of India's leading stock market education platform.
            Our franchise model is designed to help you grow while making a real impact.
          </p>
        </VideoTextWrapper>
      </VideoSection>
    </Container>
  );
};

/* Styled Components */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: 90%;
  margin: 40px auto;
  padding: 30px;
  background: rgb(62, 61, 61);
  border-radius: 15px;
  font-family: "Poppins", sans-serif;
  color: #fff;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 40px;

  .title {
    font-size: 52px;
    font-weight: bold;
    color: white;
  }

  .highlight {
    color:rgb(255, 255, 255);  /* Yellow */
  }

  .highlight2 {
    color: #febb12;  /* Darker orange */
  }
`;
const Row = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightSection = styled.div`
  flex: 1.5;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 10px;
  max-width: 500px;  /* Reduced width */
  margin: 0 auto;  /* Center alignment */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: black;
  padding: 15px; /* Reduced padding */
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input, select {
    padding: 8px; /* Reduced padding */
    border-radius: 5px;
    font-size: 14px; /* Reduced font size */
  }
`;

const SubmitButton = styled.button`
  padding: 10px;  /* Reduced button size */
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  background: #007bff;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background: #0056b3;
  }
`;
const VideoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 40px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const VideoWrapper = styled.div`
  flex: 1;
`;

const Video = styled.video`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
`;
const ApplyButton = styled.button`
  margin-top: 20px;
  padding: 12px 25px;
  background: #febb12;
  border: none;
  color: black;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
  
  &:hover {
    background: #febb12;
  }
`;

const VideoTextWrapper = styled.div`
  flex: 1;
  text-align: center;

  .video-title {
    font-size: 32px;
    font-weight: bold;
    color: #febb12;
  }

  .video-description {
    font-size: 16px;
    color:rgb(248, 248, 248);
  }
`;

export default Franchise;
