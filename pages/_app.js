import { useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/_index.scss";

import MainHeader from "../components/layout/MainHeader";
import MainFooter from "../components/layout/MainFooter";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

// NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });
Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
};

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />;

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let themeColor = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light";
    setBodyThemeClass(themeColor);
  }, []);

  const setBodyThemeClass = (theme) => {
    setTheme(theme);
    document.querySelector("body").classList.remove("light");
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add(theme);
    localStorage.setItem("theme", theme);
  };

  const handleChangeThemeColor = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    setBodyThemeClass(newTheme);
  };

  return (
    <>
      <Head>
        <title> Resume | Hossam Marey</title>
        <meta
          name="description"
          content="Hossam Marey : a frontend developer from Egypt"
        />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <MainHeader />
      <div className="theme-changer" onClick={handleChangeThemeColor}>
        {theme === "dark" ? (
          <img src="icons/sun.png" alt="sun icon" className="sun" />
        ) : (
          <img src="icons/moon.png" alt="moon icon" className="moon" />
        )}
      </div>
      <main>
        <Component {...pageProps} />
      </main>
      <MainFooter />
    </>
  );
}

export default MyApp;
