import styled from "styled-components";

export const StyledBurger = styled.button`
  pointer-events: none;
  opacity: 0;
  @media (max-width: 900px) {
    opacity: 100%;
    pointer-events: auto;
    position: absolute;
    top: 5%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 100;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: black;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      z-index: 5;
    }
  }
`;
