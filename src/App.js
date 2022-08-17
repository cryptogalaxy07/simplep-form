import React from "react";
import Heading from "./heading/heading";
import BackgroundView from "./layout/BackgroundView";
import AboutProject from "./layout/AboutProject";
import MentorFlight from "./layout/MentorFlight";
import Footer from "./layout/Footer";
import ScrollButton from "./components/scrollbutton";

export default function App() {
  return (
    <div className="relative ">
      <Heading />
      <BackgroundView />
      <AboutProject />
      <ScrollButton />
      <MentorFlight />
      <Footer />
    </div>
  );
}
