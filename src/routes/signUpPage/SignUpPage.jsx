import { SignUp } from "@clerk/clerk-react";
import "./signUpPage.css";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="signUpPage">
      <SignUp path="/sign-up" signInUrl="sign-in" />
    </div>
  );
};

export default SignUpPage;
