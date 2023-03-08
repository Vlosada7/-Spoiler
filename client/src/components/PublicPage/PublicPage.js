import { SignInButton } from "@clerk/clerk-react";
import React from "react";
import './PublicPage.css'
import logo from './spoiler.png'


const PublicPage = () => {

  return (
    <div 
      className="hero__bg__image__container"
      style={{
        backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg)'

      }}
      >
        <div className='header-public'>
        <img
          src={logo}
          alt="Logo"
          className='logo-public'
        />
      </div>
      <div className="text-public">
        <h1>A social media for TV show's without spoilers</h1>
      </div>
        <div className="sign-in">
          <SignInButton mode='modal'>
            <button className="btn btn-sign">
              Sign in
            </button>
          </SignInButton>
        </div>
      </div>
  );
};

export default PublicPage;