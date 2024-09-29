import React from "react"; 
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

// Styled component for the container at the top of the card.
const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

// Styled component for the image, with responsive size adjustments.
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

// Styled component for the body container that holds text content.
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// Styled component for the school name text, adjusting font size on smaller screens.
const School = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

// Styled component for the degree text, with font adjustments for small screens.
const Degree = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

// Styled component for the date, with responsive font size.
const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

// Styled component for the description text with responsive font size.
const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

// Styled component for the grade text with responsive font size.
const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

// Styled component for wrapping text inside the description.
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

// Functional component to render an education card.
// Takes an "education" object as a prop, containing school, degree, date, image, and other details.
const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      // Sets the icon (typically an image) for each timeline element.
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education?.img}
        />
      }
      // Styles for the card content.
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      // Style for the arrow pointing to the content.
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      // Displays the date of the education entry.
      date={education?.date}
    >
      {/* Top section containing the image and text details */}
      <Top>
        <Image src={education?.img} />
        <Body>
          <School>{education?.school}</School>
          <Degree>{education?.degree}</Degree>
          <Date>{education?.date}</Date>
        </Body>
      </Top>
      
      {/* Display the grade, if available */}
      <Grade>
        <b>Grade : </b>
        {education?.grade}
      </Grade>

      {/* Description of the education, displayed only if it exists */}
      <Description>
        {education?.desc && <Span>{education.desc}</Span>}
      </Description>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
