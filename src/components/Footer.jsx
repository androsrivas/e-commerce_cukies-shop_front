import React from "react";
import Logo from "./atoms/Logo";
import Navigation from "./molecules/Navigation";
// import Newsletter from "../../../molecules/newsletter/Newsletter";
// import Copyright from "../../../molecules/copyright/Copyright";

function Footer() {
  return (
    <footer className="footer-container">
      <section className="footer-main-section">
        <Logo name="Cukies Shop"/>
        <Navigation />
        {/* <Newsletter /> */}
      </section>
      <section className="footer-copyright">
        {/* <Copyright /> */}
      </section>
    </footer>
  )
}

export default Footer