import styled from "styled-components";
import backgroundImage from "/background-nature.jpg"; // Add path to your background image here

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 1rem;
`;

const StyledDiv = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 5rem 10rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    max-width: 85%; /* Narrower on tablets */
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    max-width: 95%; /* Nearly full width on mobile */
    padding: 5rem 2rem;
    box-shadow: none; /* Cleaner look for mobile */
    background-color: rgba(
      255,
      255,
      255,
      0.95
    ); /* Higher opacity for better readability */
  }
`;
const FormWrapper = ({ children }) => {
  return (
    <Container>
      <StyledDiv>{children}</StyledDiv>;
    </Container>
  );
};

export default FormWrapper;
