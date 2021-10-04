import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Links = styled.div`
  font-weight: 400;
  text-transform: uppercase;
  a {
    list-style-type: none;
    text-decoration: none;
    margin: 1em;
    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

// Custom Sections
export const CustomSection = styled.div`
  padding: 3em;
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
  h1 {
    padding-left: ${16 / 16}em;
    border-left: ${5 / 16}em solid black;
    margin-top: ${16 / 16}em;
    font-size: 1.875rem;
    line-height: 2.25rem;
    text-transform: uppercase;
  }
`;

// Service Style
export const ServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

// Service Style
export const ServiceCard = styled.div`
  height: 550px;
`;
