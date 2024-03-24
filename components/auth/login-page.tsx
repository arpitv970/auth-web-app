import React, { Suspense } from "react";
import LoginForm from "./login-form";

const LoginPage = () => {
  return (
    <Suspense fallback={`Loading...`}>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
