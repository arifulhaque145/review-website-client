import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Links = styled.div`
  font-weight: 400;
  text-transform: uppercase;
  padding-top: 5px;
  a {
    list-style-type: none;
    text-decoration: none;
    margin: 10px;
    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

// Main App Sections
export const Apps = styled.div`
  margin: 0;
  padding: 0;
  h2 {
    margin: 0;
  }
`;

// Home Container
export const HomeContainer = styled.div`
  background: url("https://www.moneycrashers.com/wp-content/uploads/2011/03/learn-a-new-language-flags.jpg")
    no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  height: 500px;
  margin: 0;
  padding: 50px;
`;

// Services Sections
export const ServiceContainer = styled.div`
  margin: 0;
  padding: 50px;
  border: 1px solid red;
`;

// Service Style
export const ServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

// Service Style
export const ServiceCard = styled.div`
  margin: 20px;
  padding: 10px;
  border: 1px solid black;
`;
