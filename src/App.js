import React from "react"
import { FooterContainer } from "./containers/footer"
import { JumbotronContainer } from "./containers/jumbotron"

export default function App() {
  return (
    <React.Fragment>
      <JumbotronContainer></JumbotronContainer>
      <FooterContainer></FooterContainer>
    </React.Fragment>
  );
}


