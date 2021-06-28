import Head from "next/head";
import { SignInForm } from "../components/SignInForm";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign In | Upfi</title>
      </Head>

      <SignInForm />
    </>
  );
}
