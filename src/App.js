import React from "react";
import { Logo, Navigation, Footer, Jumbotron, FirstBody, SecondBody, ThirdBody, FourthBody, FifthBody, SixthBody, Chat, Popup } from "./components";

const App = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Jumbotron />
      <FirstBody />
      <SecondBody />
      <ThirdBody />
      <FourthBody />
      <FifthBody />
      <SixthBody />
      <Footer />
      <Chat />
      <Popup />
    </div>
  );
};

export default App;