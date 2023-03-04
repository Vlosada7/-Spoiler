import { SignIn, SignInButton } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './PublicPage.css'
import { useAuth, useUser } from '@clerk/clerk-react';

const PublicPage = () => {
  // const { signIn } = useAuth();
  // const { user } = useUser();

  // const handleSignIn = async () => {
  //   await signIn();
  //   console.log(user);
  // }

  return (
    <div>
      <header>

      </header>
      <div class="hero__bg__image__container">
          {/* <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="BG hero image"
            class="hero__bg__image"
          /> */}
          <SignInButton />
        </div>
    </div>
  );
};

export default PublicPage;