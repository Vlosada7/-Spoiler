import { SignIn, SignInButton } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './PublicPage.css'
import { useAuth, useUser } from '@clerk/clerk-react';

const PublicPage = () => {

  return (
    <div 
      className="hero__bg__image__container"
      style={{
        backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg)'

      }}
      >
        <div>
          <SignInButton />
        </div>
      </div>
  );
};

export default PublicPage;