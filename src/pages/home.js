import React from "react";
import { OptForm } from "../components";
import { Feature } from "../components"
import {HeaderContainer} from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer"
import { JumbotronContainer } from "../containers/jumbotron"

export default function Home() {
  return (
    <React.Fragment>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited movies, TV shows and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel anytime.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder = "Email address"></OptForm.Input>
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break></OptForm.Break>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer></JumbotronContainer>
      <FaqsContainer></FaqsContainer>
      <FooterContainer></FooterContainer>
    </React.Fragment>
  )
}