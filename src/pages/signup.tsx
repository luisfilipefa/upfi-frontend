import Head from "next/head";
import { SignUpForm } from "../components/SignUpForm";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up | Upfi</title>
      </Head>

      <SignUpForm />
    </>
  );
}
