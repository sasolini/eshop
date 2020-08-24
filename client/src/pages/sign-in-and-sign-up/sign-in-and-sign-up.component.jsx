import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import Hero from '../../components/hero/hero.component';

import heroImg from '../../assets/shop.webp';

import {
  SignPageContainer,
  SignInAndSignUpContainer,
} from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignPageContainer>
    <Hero
      bgImage={heroImg}
      title='Account'
      subTitle='One account to rule them all.'
    />
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  </SignPageContainer>
);

export default SignInAndSignUpPage;
