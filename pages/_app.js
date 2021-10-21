import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
  ThemeButton,
} from "../styles/theme";

function MyApp({ Component, pageProps }) {
  //https://medium.com/bigpanda-engineering/dark-theme-with-styled-components-a573dd898e2a
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updateTheme = isDarkTheme ? "light" : "dark";
    setTheme(updateTheme);
    localStorage.setItem("themeRick&Morty", updateTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("themeRick&Morty");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ThemeButton onClick={toggleTheme}>
        {isDarkTheme ? (
          <span aria-label="Light mode" role="img">
            <Image
              src="/icons/47314_weather_icon.png"
              alt="Light Mode"
              width={42}
              height={42}
            />
          </span>
        ) : (
          <span aria-label="Dark mode" role="img">
            <Image
              src="/icons/47306_moon_phase_icon.png"
              alt="Dark Mode"
              width={38}
              height={38}
            />
          </span>
        )}
      </ThemeButton>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
