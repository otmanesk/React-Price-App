import React from "react";
import Header from "../includes/Header";
import Footer from "../includes/Footer";

const Layouts = props => {
  return (
    <div>
      <Header headerTitle="logooo" />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layouts;
