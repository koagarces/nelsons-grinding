import styled from "styled-components";

export const StyledMenu = styled.nav`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.85);
  height: 100vh;
  text-align: left;
  padding: 10%;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  a {
    font-size: large;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
