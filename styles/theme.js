import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: background 0.5s ease-in, color 0.5s ease-in;
    }
`;

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
};
export const darkTheme = {
  body: "#121620",
  text: "#66b3ff",
};

export const ThemeButton = styled.button`
  padding-right: 15px;
  padding-left: 15px;
  background: ${({ theme }) => theme.body};
  border: none;
  display: block;
  position: relative;
  margin-top: 1rem;
  margin-right: 2rem;
  margin-left: auto;
`;
