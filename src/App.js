import React from "react";
import Heading from "./heading/heading";
import BackgroundView from "./layout/BackgroundView";
import AboutProject from "./layout/AboutProject";
import MentorFlight from "./layout/MentorFlight";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <div>
      <Heading />
      <BackgroundView />
      <AboutProject />
      <MentorFlight />
      <Footer />
    </div>
  );
}
